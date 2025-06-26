import React from 'react';

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5 text-positive-dark-gray"} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const InstitutionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

export const ProjectIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

export const CollectiveIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
);

export const ForumIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor"> {/* Adjusted size to h-5 w-5 to match example */}
    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
  </svg>
);

export const BackArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
  </svg>
);

// New Icons
export const MegaphoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 21.0001C14.0417 21.0001 13.8333 20.9417 13.6333 20.8334L10.0333 18.8334H5.25C4.94167 18.8334 4.675 18.7167 4.475 18.5084C4.275 18.3001 4.16667 18.0334 4.16667 17.7501V13.7501C4.16667 13.4584 4.275 13.1917 4.475 12.9917C4.675 12.7917 4.94167 12.6751 5.25 12.6751H10.0333L13.6333 10.6751C14.0583 10.4334 14.5667 10.5001 14.9 10.8251C15.2333 11.1501 15.3 11.6584 15.0583 12.0834L14.25 13.5417H19.75C20.1583 13.5417 20.525 13.7084 20.7917 13.9751C21.0583 14.2417 21.225 14.6084 21.225 15.0084V16.5001C21.225 16.9001 21.0583 17.2584 20.7917 17.5251C20.525 17.7917 20.1583 17.9584 19.75 17.9584H14.25V21.0001ZM6.00833 17.0001H10.5083L13.4167 18.6751V12.8251L10.5083 14.5084H6.00833V17.0001ZM19.4167 16.5001V15.0001C19.4167 14.9167 19.3583 14.8834 19.325 14.8584C19.3 14.8417 19.2333 14.8084 19.0417 14.7751L14.7667 14.7751L15.35 15.7501L14.7667 16.7251L19.075 16.7251C19.2167 16.7251 19.2917 16.7084 19.325 16.6834C19.3583 16.6584 19.4167 16.5917 19.4167 16.5001Z" />
    <path d="M12 4L4 8V10L12 6L20 10V8L12 4Z" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6"} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927C9.3 2.388 9.704 2.388 9.954 2.927L11.751 6.839L16.039 7.325C16.631 7.391 16.853 8.169 16.382 8.574L13.22 11.343L14.038 15.659C14.172 16.248 13.504 16.68 12.997 16.39L9.499 14.27L6.003 16.39C5.496 16.68 4.828 16.248 4.962 15.659L5.78 11.343L2.618 8.574C2.147 8.169 2.369 7.391 2.961 7.325L7.249 6.839L9.049 2.927Z" />
  </svg>
);

export const ConstructionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 21H2V19H3V11.72C3 11.08 3.26 10.49 3.71 10.05L9.06 4.71C9.51 4.26 10.1 4 10.73 4H13.27C13.9 4 14.49 4.26 14.94 4.71L20.29 10.05C20.74 10.49 21 11.08 21 11.72V19H22V21ZM5 19H19V11.72C19 11.53 18.92 11.34 18.79 11.21L13.44 5.86C13.31 5.73 13.12 5.65 12.93 5.65H11.07C10.88 5.65 10.69 5.73 10.56 5.86L5.21 11.21C5.08 11.34 5 11.53 5 11.72V19Z" />
    <path d="M8 12H16V14H8V12Z" />
  </svg>
);

export const BooksIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 5C21 3.346 19.654 2 18 2H6C4.346 2 3 3.346 3 5V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V5ZM19 19C19 19.551 18.551 20 18 20H6C5.449 20 5 19.551 5 19V5C5 4.449 5.449 4 6 4H18C18.551 4 19 4.449 19 5V19Z"/>
    <path d="M16 6H8V8H16V6Z"/>
    <path d="M16 10H8V12H16V10Z"/>
    <path d="M16 14H8V16H16V14Z"/>
  </svg>
);

export const BrazilFlagIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-auto rounded-sm"} viewBox="0 0 900 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="630" fill="#009739"/>
    <path d="M450 63L63 315L450 567L837 315L450 63Z" fill="#FEDD00"/>
    <circle cx="450" cy="315" r="135" fill="#002776"/>
  </svg>
);

export const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const UpArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-4 w-4"} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);
