"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import SearchBar from '../_components/searchbar';
import scrollbar from '../../public/styles/scrollbar.module.css'
import button from '../../public/styles/button.module.css'

const Page = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?&language=fr');
                setData(response.data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // Nettoyage
        };
    }, []);

    // Filtrer les cartes en fonction de la recherche
    const filteredData = data.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <main>
            <div className='flex'>
                <div className='flex-1 ml-2' style={{ maxWidth: '30vw' }}>
                    {/* Barre de recherche */}
                        <SearchBar value={searchTerm} onChange={setSearchTerm} />
                    <h1>Liste des cartes</h1>
                    <div className={scrollbar.scrollbar} style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                        {loading ? (
                            <p>Chargement...</p>
                        ) : Array.isArray(filteredData) && filteredData.length > 0 ? (
                            <ul>
                                {filteredData.map(item => (
                                    <li key={item.id}>
                                        <button className={button.button} onClick={() => setSelectedItem(item)}>
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Aucune carte correspondant à votre recherche.</p>
                        )}
                    </div>
                </div>
                    
                <div className='flex-1 ps-2'>
                    {selectedItem && (
                        <div>
                            <h2>Carte sélectionnée :</h2>
                            <div>{selectedItem.name}</div>
                            <div>{selectedItem.type}</div>
                            {selectedItem.archetype && (<div>Archetype: {selectedItem.archetype}</div>)}
                            
                            {selectedItem.level && (<div>Niveau: {selectedItem.level}</div>)}
                            <img src={selectedItem.card_images[0].image_url_small} alt={selectedItem.name}/>
                            <div>{selectedItem.desc}</div>
                            {/* Affichez ici d'autres informations sur l'élément si nécessaire */}
                        </div>
                        
                    )}
                </div>
            </div>
        </main>
    );
};
export default Page;
