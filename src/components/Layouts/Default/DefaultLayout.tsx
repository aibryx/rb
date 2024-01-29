import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ModalWindow } from '@/components/Layouts/Modal';
import { useModal } from '@/store/store';

export const DefaultLayout = () => {
  const { isOpen, onClose } = useModal();
  return (
    <>
      <Header />
      <Navbar />
      <ModalWindow onClose={onClose} isOpen={isOpen} />
      <Outlet />
      <Footer />
    </>
  );
};
