import './Footer.css';
import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.instagram.com">
          <FaInstagram size="40"  color="#fff"/>
        </a>
        <a href="https://www.youtube.com">
          <FaYoutube size="40"  color="#fff"/>
        </a>   
      </div>
      <p className="copyright">Socialize+ feito por Andréia e Jonathan</p>
    </footer>
)
}
