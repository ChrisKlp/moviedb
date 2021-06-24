import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

type SearchProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} size="full" onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.900">
        <ModalCloseButton />
        <ModalBody m={0} p={0}>
          <p>hello from modal</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Search;
