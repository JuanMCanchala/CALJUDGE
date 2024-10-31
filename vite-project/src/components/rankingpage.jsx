import { useState } from 'react';
import RankingTable from '../views/RankingTable.jsx';
import './RankingPage.css';

const RankingPage = () => {
    const [activeTab, setActiveTab] = useState('Competitions');

    // Datos de ejemplo para las categorías
    const categoriesData = {
        Competitions: { grandmasters: 346, masters: 2138, experts: 10289, contributors: 68651, novices: 123478 },
        Datasets: { grandmasters: 120, masters: 950, experts: 5000, contributors: 20000, novices: 50000 },
        Notebooks: { grandmasters: 450, masters: 1800, experts: 9000, contributors: 70000, novices: 100000 },
        Discussions: { grandmasters: 50, masters: 300, experts: 4000, contributors: 50000, novices: 70000 },
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="ranking-page">
            <h1>Kaggle Rankings</h1>
            <div className="tabs">
                {['Competitions', 'Datasets', 'Notebooks', 'Discussions'].map((tab) => (
                    <button
                        key={tab}
                        className={activeTab === tab ? 'active' : ''}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="category-icons">
                <div className="icon-category">
                    <span role="img" aria-label="grandmasters">🌟</span>
                    <p>{categoriesData[activeTab].grandmasters} Grandmasters</p>
                </div>
                <div className="icon-category">
                    <span role="img" aria-label="masters">🌟</span>
                    <p>{categoriesData[activeTab].masters} Masters</p>
                </div>
                <div className="icon-category">
                    <span role="img" aria-label="experts">🌟</span>
                    <p>{categoriesData[activeTab].experts} Experts</p>
                </div>
                <div className="icon-category">
                    <span role="img" aria-label="contributors">🌟</span>
                    <p>{categoriesData[activeTab].contributors} Contributors</p>
                </div>
                <div className="icon-category">
                    <span role="img" aria-label="novices">🌟</span>
                    <p>{categoriesData[activeTab].novices} Novices</p>
                </div>
            </div>

            <RankingTable activeTab={activeTab} />
        </div>
    );
};

export default RankingPage;