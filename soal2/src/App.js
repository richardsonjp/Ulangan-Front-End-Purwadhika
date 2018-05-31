import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <center><select className="jenjang" onClick={this.showMenu}>
          <p>Pilih Jenjang</p>
        </select></center>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <center><option> Pendidikan Pra Sekolah </option><br/>
                <button> Pendidikan Dasar </button><br/>
                <button> Pendidikan Menengah </button><br/>                
                <button> Pendidikan Tinggi </button></center>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card;
