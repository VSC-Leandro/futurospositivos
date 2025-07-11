
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { MapPage } from './components/MapPage';
import { InitiativesPage } from './components/InitiativesPage';
import { InitiativeDetailsPage } from './components/InitiativeDetailsPage';
import { ForumPage } from './components/ForumPage';
import { ForumTopicDetailsPage } from './components/ForumTopicDetailsPage';
import { CreateTopicModal } from './components/CreateTopicModal';
import { CreateInitiativeModal, CreateInitiativeFormData } from './components/CreateInitiativeModal';
import { AddInitiativeTypeModal } from './components/AddInitiativeTypeModal'; // New Import
import { LoginPage } from './components/LoginPage'; 
import { Page, Initiative, InitiativeCategory, ForumItemData, ForumTopic, ForumReply } from './types';
import { INITIAL_INITIATIVES_DATA, ALL_FORUM_TOPICS as INITIAL_FORUM_TOPICS, FORUM_CATEGORIES_DATA } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.MAP);
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);
  const [allInitiatives, setAllInitiatives] = useState<Initiative[]>(INITIAL_INITIATIVES_DATA);
  const [mapFilter, setMapFilter] = useState<InitiativeCategory | 'all'>(InitiativeCategory.COLETIVO);
  const [isForumPreviewOpen, setIsForumPreviewOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  const [isCreateTopicModalOpen, setIsCreateTopicModalOpen] = useState(false);
  const [allForumTopics, setAllForumTopics] = useState<ForumTopic[]>(INITIAL_FORUM_TOPICS);
  
  const [isCreateInitiativeModalOpen, setIsCreateInitiativeModalOpen] = useState(false);
  const [defaultInitiativeTypeForModal, setDefaultInitiativeTypeForModal] = useState<InitiativeCategory | undefined>(undefined); // For pre-filling type
  const [isAddTypeModalOpen, setIsAddTypeModalOpen] = useState(false); // New state for Add Initiative Type Modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleNavigate = useCallback((page: Page, initiative?: Initiative) => {
    setCurrentPage(page);
    if (initiative) {
      setSelectedInitiative(initiative);
    } else if (page !== Page.INITIATIVE_DETAILS) {
      setSelectedInitiative(null);
    }
    
    // Reset topic if not navigating to topic details
    if (page !== Page.FORUM_TOPIC_DETAILS) {
        setSelectedTopic(null);
    }

    // Close modals on any main page navigation
    setIsForumPreviewOpen(false); 
    setIsCreateTopicModalOpen(false);
    setIsCreateInitiativeModalOpen(false);
    setIsAddTypeModalOpen(false); // Close new modal on navigation
    setIsLoginModalOpen(false);
    window.scrollTo(0, 0); 
  }, []);

  const handleShowInitiativeDetails = useCallback((initiative: Initiative) => {
    handleNavigate(Page.INITIATIVE_DETAILS, initiative);
  }, [handleNavigate]);

  const handleBackToPreviousPage = useCallback(() => {
    if (selectedInitiative) {
        handleNavigate(Page.INITIATIVES);
    } else {
        handleNavigate(Page.MAP);
    }
  }, [handleNavigate, selectedInitiative]);
  
  const handleMapFilterChange = useCallback((filter: InitiativeCategory | 'all') => {
    setMapFilter(filter);
  }, []);

  const toggleForumPreview = useCallback(() => {
    setIsForumPreviewOpen(prev => !prev);
  }, []);

  const handleOpenCreateTopicModal = useCallback(() => {
    setIsCreateTopicModalOpen(true);
  }, []);

  const handleCloseCreateTopicModal = useCallback(() => {
    setIsCreateTopicModalOpen(false);
  }, []);

  const handleCreateTopic = useCallback((newTopicData: { title: string; categoryId: string; tags: string; message: string }) => {
    const newTopic: ForumTopic = {
      id: `topic_${Date.now()}`,
      categoryId: newTopicData.categoryId,
      title: newTopicData.title,
      author: 'Usuário Atual', 
      authorAvatar: `https://i.pravatar.cc/150?u=current_user${Date.now()}`,
      lastReplyTime: 'agora mesmo',
      tags: newTopicData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      replyCount: 0,
      views: 0,
      pinned: false,
      message: newTopicData.message,
      replies: [],
    };
    setAllForumTopics(prevTopics => [newTopic, ...prevTopics]);
    handleCloseCreateTopicModal();
  }, [handleCloseCreateTopicModal]);
  
  const handleSelectTopic = useCallback((topic: ForumTopic) => {
    setSelectedTopic(topic);
    setCurrentPage(Page.FORUM_TOPIC_DETAILS);
    window.scrollTo(0,0);
  }, []);
  
  const handleBackToForumList = useCallback(() => {
    setSelectedTopic(null);
    setCurrentPage(Page.FORUM);
    window.scrollTo(0, 0);
  }, []);

  const handleAddReply = useCallback((topicId: string, content: string) => {
    const newReply: ForumReply = {
      id: `reply_${Date.now()}`,
      author: 'Usuário Atual', // Placeholder
      authorAvatar: 'https://i.pravatar.cc/150?u=current_user', // Placeholder
      timestamp: 'agora mesmo',
      content: content,
    };

    let updatedTopic: ForumTopic | null = null;

    const updatedTopics = allForumTopics.map(topic => {
      if (topic.id === topicId) {
        const replies = [...(topic.replies || []), newReply];
        updatedTopic = { 
          ...topic, 
          replies,
          replyCount: replies.length,
          lastReplyTime: 'agora mesmo',
        };
        return updatedTopic;
      }
      return topic;
    });

    setAllForumTopics(updatedTopics);
    if(updatedTopic) {
      setSelectedTopic(updatedTopic); // Update the state for the details page to re-render
    }
  }, [allForumTopics]);

  const handleEditReply = useCallback((topicId: string, replyId: string, newContent: string) => {
    let updatedTopic: ForumTopic | null = null;
    const updatedTopics = allForumTopics.map(topic => {
      if (topic.id === topicId) {
        const updatedReplies = (topic.replies || []).map(reply => {
          if (reply.id === replyId) {
            return { ...reply, content: newContent, timestamp: `${reply.timestamp} (editado)` };
          }
          return reply;
        });
        updatedTopic = { ...topic, replies: updatedReplies };
        return updatedTopic;
      }
      return topic;
    });

    setAllForumTopics(updatedTopics);
    if (updatedTopic) {
      setSelectedTopic(updatedTopic);
    }
  }, [allForumTopics]);

  const handleDeleteReply = useCallback((topicId: string, replyId: string) => {
    let updatedTopic: ForumTopic | null = null;
    const updatedTopics = allForumTopics.map(topic => {
      if (topic.id === topicId) {
        const updatedReplies = (topic.replies || []).filter(reply => reply.id !== replyId);
        updatedTopic = { 
          ...topic, 
          replies: updatedReplies,
          replyCount: updatedReplies.length,
        };
        return updatedTopic;
      }
      return topic;
    });

    setAllForumTopics(updatedTopics);
    if (updatedTopic) {
      setSelectedTopic(updatedTopic);
    }
  }, [allForumTopics]);


  // Create Initiative Modal Handlers
  const handleOpenCreateInitiativeModal = useCallback((defaultType?: InitiativeCategory) => {
    setDefaultInitiativeTypeForModal(defaultType);
    setIsCreateInitiativeModalOpen(true);
    setIsAddTypeModalOpen(false); // Ensure AddTypeModal is closed
  }, []);

  const handleCloseCreateInitiativeModal = useCallback(() => {
    setIsCreateInitiativeModalOpen(false);
    setDefaultInitiativeTypeForModal(undefined); // Reset default type
  }, []);

  const handleCreateInitiative = useCallback((formData: CreateInitiativeFormData) => {
    const newId = allInitiatives.length > 0 ? Math.max(...allInitiatives.map(i => i.id)) + 1 : 1;
    const newInitiative: Initiative = {
      id: newId,
      name: formData.name,
      type: formData.type, // This will be pre-filled if defaultType was set
      lat: parseFloat(formData.lat) || 0,
      lng: parseFloat(formData.lng) || 0,
      avatar: formData.avatar || `https://picsum.photos/seed/Avatar${newId}/160/160`,
      banner: formData.banner || `https://picsum.photos/seed/Banner${newId}/1200/250`,
      tags: formData.tagsString.split(',').map(tag => tag.trim()).filter(tag => tag),
      details: {
        Responsavel: formData.responsavel,
        Local: formData.local,
        Descrição: formData.descricao,
        departamento: formData.departamento,
      },
      campo: formData.campo,
      countryCode: formData.countryCode,
      projects: [], 
    };
    setAllInitiatives(prevInitiatives => [newInitiative, ...prevInitiatives]);
    handleCloseCreateInitiativeModal();
    // Optionally navigate to initiatives page or show success message
    // For now, if on map, stay on map. If on initiatives, it refreshes.
    if (currentPage !== Page.INITIATIVES && currentPage !== Page.MAP) {
      handleNavigate(Page.INITIATIVES);
    }
  }, [allInitiatives, handleCloseCreateInitiativeModal, currentPage, handleNavigate]);

  // Add Initiative Type Modal Handlers
  const handleOpenAddTypeModal = useCallback(() => {
    setIsAddTypeModalOpen(true);
  }, []);

  const handleCloseAddTypeModal = useCallback(() => {
    setIsAddTypeModalOpen(false);
  }, []);

  const handleSelectInitiativeType = useCallback((type: InitiativeCategory) => {
    handleOpenCreateInitiativeModal(type); // This will set the default type and open the CreateInitiativeModal
  }, [handleOpenCreateInitiativeModal]);
  

  const handleOpenLoginModal = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const handleCloseLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  const handleLoginSubmit = useCallback((data: { email: string; pass: string }) => {
    console.log('Login attempt:', data);
    alert(`Tentativa de Login:\nEmail: ${data.email}\nSenha: ${data.pass}\n\n(Funcionalidade de login real não implementada.)`);
    handleCloseLoginModal();
  }, [handleCloseLoginModal]);


  const renderPage = () => {
    switch (currentPage) {
      case Page.MAP:
        return (
          <MapPage 
            initiatives={allInitiatives}
            onShowInitiativeDetails={handleShowInitiativeDetails}
            onNavigate={handleNavigate}
            isForumPreviewOpen={isForumPreviewOpen}
            onToggleForumPreview={toggleForumPreview}
            onOpenAddTypeModal={handleOpenAddTypeModal} // Pass handler to MapPage
          />
        );
      case Page.FORUM:
        return <ForumPage
          allTopics={allForumTopics}
          categories={FORUM_CATEGORIES_DATA}
          onSelectTopic={handleSelectTopic}
          onOpenCreateTopicModal={handleOpenCreateTopicModal}
        />;
      case Page.FORUM_TOPIC_DETAILS:
        if (selectedTopic) {
          return (
            <ForumTopicDetailsPage
              topic={selectedTopic}
              onBack={handleBackToForumList}
              onAddReply={handleAddReply}
              onEditReply={handleEditReply}
              onDeleteReply={handleDeleteReply}
            />
          );
        }
        // Fallback if no topic is selected, go back to the forum
        handleBackToForumList();
        return null;
      case Page.INITIATIVES:
        return (
          <InitiativesPage 
            initiatives={allInitiatives}
            onShowInitiativeDetails={handleShowInitiativeDetails} 
            onOpenCreateInitiativeModal={() => handleOpenCreateInitiativeModal()} // Call without default type from here
          />
        );
      case Page.INITIATIVE_DETAILS:
        return <InitiativeDetailsPage initiative={selectedInitiative} onBack={handleBackToPreviousPage} />;
      default: 
        return (
            <MapPage 
              initiatives={allInitiatives}
              onShowInitiativeDetails={handleShowInitiativeDetails}
              onNavigate={handleNavigate}
              isForumPreviewOpen={isForumPreviewOpen}
              onToggleForumPreview={toggleForumPreview}
              onOpenAddTypeModal={handleOpenAddTypeModal} // Pass handler to MapPage
            />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-positive-bg-base font-inter antialiased">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        showMapFilters={currentPage === Page.MAP}
        onOpenLoginModal={handleOpenLoginModal}
        currentFilter={mapFilter}
        onFilterChange={handleMapFilterChange}
      />
      <main className="flex-grow flex flex-col relative">
        {renderPage()}
      </main>
      {isCreateTopicModalOpen && (
        <CreateTopicModal
          isOpen={isCreateTopicModalOpen}
          onClose={handleCloseCreateTopicModal}
          onCreateTopic={handleCreateTopic}
          forumCategories={FORUM_CATEGORIES_DATA}
        />
      )}
      {isCreateInitiativeModalOpen && (
        <CreateInitiativeModal
          isOpen={isCreateInitiativeModalOpen}
          onClose={handleCloseCreateInitiativeModal}
          onCreateInitiative={handleCreateInitiative}
          defaultType={defaultInitiativeTypeForModal} // Pass default type
        />
      )}
      {isAddTypeModalOpen && ( // Render new modal
        <AddInitiativeTypeModal
          isOpen={isAddTypeModalOpen}
          onClose={handleCloseAddTypeModal}
          onSelectType={handleSelectInitiativeType}
        />
      )}
      {isLoginModalOpen && (
        <LoginPage
          isOpen={isLoginModalOpen}
          onClose={handleCloseLoginModal}
          onLoginSubmit={handleLoginSubmit}
        />
      )}
    </div>
  );
};

export default App;
