import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { ReactComponent as Search } from '../../assets/search.svg';
import character from '../../assets/photo.png';
import { Container, Table } from './styles';
import api from '../../services/api';

interface ListProps {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Home: React.FC = () => {
  const [list, setList] = useState<ListProps[]>([]);

  useEffect(() => {
    const loadHeroes = async (): Promise<void> => {
      const response = await api({ service: 'characters' });
      console.log(response.data);
      const { results } = response.data;

      setList(results);
    };

    loadHeroes();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <h1>Busca de personagens</h1>
        <h2>Nome do personagem</h2>
        <div>
          <input type="search" placeholder="Search" />

          <Search />
        </div>

        <Table>
          <thead>
            <tr>
              <th>Personagem</th>
              <th>Séries</th>
              <th>Eventos</th>
            </tr>
          </thead>

          <tbody>
            {list.map(i => (
              <tr>
                <td>
                  <img src={character} alt="Personagem" />
                  <h3>Abner Jenkins</h3>
                </td>
                <td>
                  <p>Iron Man: Armor Wars</p>
                  <p>Old Man Hawkeye</p>
                  <p>Fantastic Four Visionaries: Walter Simonson Vol. 1</p>
                </td>
                <td>
                  <p>AvX</p>
                  <p>Demon in the Bottle</p>
                  <p>Dynasty M</p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Home;
