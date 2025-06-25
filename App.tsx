import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { MapPage } from './components/MapPage';
import { InitiativesPage } from './components/InitiativesPage';
import { InitiativeDetailsPage } from './components/InitiativeDetailsPage';
import { ForumPage } from './components/ForumPage';
import { ForumCategoryViewPage } from './components/ForumCategoryViewPage';
import { CreateTopicModal } from './components/CreateTopicModal'; // New Import
import { FilterButtons } from './components/FilterButtons';
import { Page, Initiative, InitiativeCategory, ForumItemData, ForumTopic } from './types';
import { INITIAL_INITIATIVES_DATA, ALL_FORUM_TOPICS as INITIAL_FORUM_TOPICS, FORUM_CATEGORY_VIEW_SIDEBAR_TAGS, FORUM_POPUP_DATA } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.MAP);
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);
  const [initiativesData] = useState<Initiative[]>(INITIAL_INITIATIVES_DATA);
  const [mapFilter, setMapFilter] = useState<InitiativeCategory | 'all'>(InitiativeCategory.COLETIVO);
  const [isForumPreviewOpen, setIsForumPreviewOpen] = useState(false);
  const [selectedForumCategory, setSelectedForumCategory] = useState<ForumItemData | null>(null);
  const [isCreateTopicModalOpen, setIsCreateTopicModalOpen] = useState(false); // New state
  const [allForumTopics, setAllForumTopics] = useState<ForumTopic[]>(INITIAL_FORUM_TOPICS); // New state

  const handleNavigate = useCallback((page: Page, initiative?: Initiative) => {
    setCurrentPage(page);
    if (initiative) {
      setSelectedInitiative(initiative);
    } else if (page !== Page.INITIATIVE_DETAILS) {
      setSelectedInitiative(null);
    }
    
    if (page !== Page.FORUM || (page === Page.FORUM && !selectedForumCategory)) {
        setSelectedForumCategory(null);
    }

    setIsForumPreviewOpen(false); 
    setIsCreateTopicModalOpen(false); // Close modal on navigation
    window.scrollTo(0, 0); 
  }, [selectedForumCategory]);

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

  const handleSelectForumCategory = useCallback((category: ForumItemData) => {
    setSelectedForumCategory(category);
    setCurrentPage(Page.FORUM); 
    window.scrollTo(0,0);
  }, []);

  const handleBackToForumMain = useCallback(() => {
    setSelectedForumCategory(null);
    setCurrentPage(Page.FORUM); // Ensure we stay on the Forum page
    window.scrollTo(0,0);
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
      author: 'Usuário Atual', // Placeholder author
      lastReplyTime: 'agora mesmo',
      tags: newTopicData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      replyCount: 0,
      // message: newTopicData.message, // If ForumTopic needs to store the initial message
    };
    setAllForumTopics(prevTopics => [newTopic, ...prevTopics]);
    handleCloseCreateTopicModal();
    // Optional: navigate to the category or the new topic
    const category = FORUM_POPUP_DATA.find(cat => cat.id === newTopicData.categoryId);
    if (category) {
      handleSelectForumCategory(category);
    }
  }, [handleCloseCreateTopicModal, handleSelectForumCategory]);


  const renderPage = () => {
    switch (currentPage) {
      case Page.MAP:
        return (
          <MapPage 
            initiatives={initiativesData} 
            onShowInitiativeDetails={handleShowInitiativeDetails}
            onNavigate={handleNavigate}
            isForumPreviewOpen={isForumPreviewOpen}
            onToggleForumPreview={toggleForumPreview}
          />
        );
      case Page.FORUM:
        if (selectedForumCategory) {
          const topicsForCategory = allForumTopics.filter(topic => topic.categoryId === selectedForumCategory.id);
          const categoryData = FORUM_POPUP_DATA.find(cat => cat.id === selectedForumCategory.id) || selectedForumCategory;
          return (
            <ForumCategoryViewPage 
              categoryData={categoryData}
              topics={topicsForCategory}
              availableTags={FORUM_CATEGORY_VIEW_SIDEBAR_TAGS}
              onBack={handleBackToForumMain}
              onOpenCreateTopicModal={handleOpenCreateTopicModal} // Pass handler
            />
          );
        }
        return <ForumPage onSelectCategory={handleSelectForumCategory} />;
      case Page.INITIATIVES:
        return <InitiativesPage initiatives={initiativesData} onShowInitiativeDetails={handleShowInitiativeDetails} />;
      case Page.INITIATIVE_DETAILS:
        return <InitiativeDetailsPage initiative={selectedInitiative} onBack={handleBackToPreviousPage} />;
      default: 
        return (
            <MapPage 
              initiatives={initiativesData} 
              onShowInitiativeDetails={handleShowInitiativeDetails}
              onNavigate={handleNavigate}
              isForumPreviewOpen={isForumPreviewOpen}
              onToggleForumPreview={toggleForumPreview}
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
      >
        {currentPage === Page.MAP && (
          <FilterButtons currentFilter={mapFilter} onFilterChange={handleMapFilterChange} />
        )}
      </Header>
      <main className="flex-grow flex flex-col relative">
        {renderPage()}
      </main>
      {isCreateTopicModalOpen && (
        <CreateTopicModal
          isOpen={isCreateTopicModalOpen}
          onClose={handleCloseCreateTopicModal}
          onCreateTopic={handleCreateTopic}
          forumCategories={FORUM_POPUP_DATA}
          defaultCategoryId={selectedForumCategory?.id}
        />
      )}
    </div>
  );
};

export default App;