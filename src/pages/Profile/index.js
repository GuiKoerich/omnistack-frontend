import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Profile() {

  const ongName = sessionStorage.getItem('ongName')

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>120</p>
          <button type="button">
            <FiTrash2 size={20} calor="#A8A8B3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>120</p>
          <button type="button">
            <FiTrash2 size={20} calor="#A8A8B3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>120</p>
          <button type="button">
            <FiTrash2 size={20} calor="#A8A8B3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>120</p>
          <button type="button">
            <FiTrash2 size={20} calor="#A8A8B3"/>
          </button>
        </li>
      </ul>
    </div>
  )
}