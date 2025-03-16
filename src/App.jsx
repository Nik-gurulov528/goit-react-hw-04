import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import fetchData from './js/fetchData';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PropagateLoader } from 'react-spinners';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ReactModal from 'react-modal';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [topic, setTopic] = useState('');
  const [numPage, setNumPage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState({});

  async function handleSubmit(values, actions) {
    if (values.field.trim() === '') {
      toast.error('There must be something!');
      return;
    }
    setNumPage(1);
    try {
      setImages([]);
      setIsError(false);
      setIsLoading(true);
      const listOfData = await fetchData(values.field, 1);
      setImages(listOfData.data.results);
      setTopic(values.field);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
      actions.resetForm();
    }
  }

  async function handleClick() {
    try {
      setIsError(false);
      setIsLoading(true);
      const listOfData = await fetchData(topic, numPage + 1);
      setImages(prevImages => {
        return [...prevImages, ...listOfData.data.results];
      });
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setNumPage(numPage + 1);
    }
  }

  function handleBigger(id) {
    setCurrentImg(() => images.find(item => item.id === id));
    setIsOpen(true);
  }

  useEffect(() => {
    if (!isOpen) {
      setCurrentImg({});
    }
  }, [isOpen]);

  ReactModal.setAppElement('#root');

  return (
    <div className="wrapper">
      <Toaster />
      <SearchBar handleSubmit={handleSubmit} />
      {images.length !== 0 && (
        <ImageGallery list={images} handleClick={handleBigger} />
      )}
      {isLoading && <PropagateLoader color="#fcba03" />}
      {isError && <ErrorMessage />}
      {images.length !== 0 && <LoadMoreBtn handleClick={handleClick} />}

      <ReactModal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(12, 12, 12, 0.8)',
          },
        }}
      >
        <ImageModal currentImg={currentImg} isOpen={isOpen} />
      </ReactModal>
    </div>
  );
}

export default App;
