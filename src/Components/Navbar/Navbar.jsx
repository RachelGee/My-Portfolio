import Logo from '../../assets/images/RGlogo.png'
import Bio from '../BioModal/Bio'
import React, { useState } from 'react';

const Navbar = () => {


    return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-1">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='#'>Bio</a>
          
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TheTessaCollective</a>
          </li>
        </ul>
        <div class="container">
        <a class="navbar-brand" href="#">
            <img src={Logo} alt="" width="150" height="144"/>
        </a>
  </div>
      </div>
    </div>
  </nav>
    </>  
    );
  }


export default Navbar;  