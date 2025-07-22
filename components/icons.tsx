
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

export const CarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11C5.84 5 5.28 5.42 5.08 6.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);

export const FoodIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5V9H18v7h2V6c0-1.66-1.34-3-3-3s-3 1.34-3 3z"/>
  </svg>
);


export const WifiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C19.73 5.73 15.15 4 12 4S4.27 5.73 1 9zm3.5 3.5L6 14c3.31-3.31 8.69-3.31 12 0l1.5-1.5c-4.14-4.14-10.86-4.14-15 0zm3.5 3.5L9.5 17.5c1.93-1.93 5.07-1.93 7 0L18 16c-2.76-2.76-7.24-2.76-10 0zM12 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" />
  </svg>
);

export const BoldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-5 w-5"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6 10.79C16.57 10.11 17 9.25 17 8.15C17 6.42 15.84 5 14.25 5H9V18H14.75C16.34 18 17.5 16.83 17.5 15.25C17.5 14.15 16.97 13.2 16.09 12.64C16.81 12.23 17.25 11.45 17.25 10.5C17.25 9.44 16.59 8.5 15.6 7.91V10.79ZM11 7H14C14.83 7 15.5 7.67 15.5 8.5C15.5 9.33 14.83 10 14 10H11V7ZM11 16V12H14.5C15.33 12 16 12.67 16 13.5C16 14.33 15.33 15 14.5 15H11.5L11 16Z"/>
  </svg>
);

export const ItalicIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-5 w-5"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5.5H13L9 18.5H6L10 5.5ZM15 5.5H18L14 18.5H11L15 5.5Z"/>
  </svg>
);

export const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-5 w-5"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM7 12C7 13.65 8.35 15 10 15H11V17H7C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7H11V9H7C5.35 9 4 10.35 4 12Z"/>
    <path d="M8 11H16V13H8V11Z"/>
  </svg>
);

export const EditIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
  </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

export const PinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "w-4 h-4"} viewBox="0 0 20 20" fill="currentColor">
    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);
