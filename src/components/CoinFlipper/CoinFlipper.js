import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      total:0,//toplam atisi tutmak icin total ekledim
      tail:0,
      head:0
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    let tahmin = Math.round(Math.random()); // Random foksiyonu ile 1 ve 0 arasinda random sayi uretip round foksiyonuyla onu yakin tam sayiya esitliyoruz.Buradan bize 1 veya 0 donuyor random olarak.
    
    this.setState({total : this.state.total +1})
    //her atis yapildiginda totali bir arttirdim.
    console.log(tahmin);

    tahmin ? this.setState({ side: "yazi", tail : this.state.tail + 1 }) : this.setState({ side: "tura" , head : this.state.head + 1 })
    // burada tahmin true ise diyoruz yani 1 ise state'i yazi olarak degistirip tail sayacina 1 ekliyoruz.0'sa yani false'sa tura olarak degistiriyoruz ve head sayacina 1 ekliyoruz. tek sartli karar yapisi oldugu icin ternary operatoru kullandim.

    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Heads or Tails?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>Try!</button>
        <p>
          Toplam {" "}
          <strong>{this.state.total}{" "}</strong>
          atıştan
          <strong> {this.state.head}{" "}</strong>ü tura
          <strong> {this.state.tail}{" "}</strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
