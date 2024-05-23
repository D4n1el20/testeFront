import React from 'react';
import "../Empresas/empresas.css";

const Dashboard = ({ userName }) => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="sidebar-header">COIN</div>
                <ul className="menu">
                    <li className="menu-item dashboard">Dashboard</li>
                    <li className="menu-item empresas">Empresas</li>
                    <li className="menu-item plano">Plano de Contas</li>
                    <li className="menu-item pagamentos">Pagamentos</li>
                    <li className="menu-item usuarios">Usuários</li>
                    <li className="menu-item planejamento">Planejamento Financeiro</li>
                </ul>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar..." />
                {/* Aqui você pode adicionar um ícone de busca se desejar */}
            </div>
            <div className="user-name-display">
                {userName}
            </div>
            <div className="square"></div>
            </div>
    );
  };

  export default Dashboard;