import { useState, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../Carousel';
import ErrorBoundary from './ErrorBoundary';
import { useDispatch } from 'react-redux';
import { adopt } from './adoptedPetSlice';
import { useGetPetQuery } from './petApiService';

const Modal = lazy(() => import('../Modal'));

const Details = () => {
<<<<<<< HEAD:src/components/Details/index.tsx
  const { id } = useParams();

  if (!id) {
    throw new Error('ID required');
  }

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const results = useQuery(['details', id], fetchPet);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
=======
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data: pet } = useGetPetQuery(id);
>>>>>>> redux:src/components/Details/index.jsx

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

<<<<<<< HEAD:src/components/Details/index.tsx
  const pet = results?.data?.pets[0];
  if (!pet) {
    throw new Error('No pet found');
  }

=======
>>>>>>> redux:src/components/Details/index.jsx
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      dispatch(adopt(pet));
                      navigate('/');
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

const DetailsWithErrorBoundary = () => (
  <ErrorBoundary>
    <Details />
  </ErrorBoundary>
);

export default DetailsWithErrorBoundary;
