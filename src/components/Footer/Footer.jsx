import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="redes">
                <a href="https://www.instagram.com" target="blank" title="Instagram"> <img src="img/instagram.jpg" alt="Instagram" /> </a>
                <a href="https://www.facebook.com" target="blank" title="Facebook"> <img src="img/facebook.jpg" alt="Facebook" /> </a>
                <a href="https://wa.me/5493517551461" target="blank" title="Whatsapp"><img src="img/whatsapp1.jpg" alt="Whatsapp" /></a>
                <a href="mailto:priscila.d.pace@gmail.com?Subject=Consulta" target="blank" title="Enviar email"><img src="img/gmail.jpg" alt="Enviar Email" /></a>
                <a href="https://www.linkedin.com/in/priscila-denise-pace/" target="blank" title="Linkedin"><img src="img/linkedin.jpg" alt="Linkedin" /></a>
            </div>
            <div className="mapa">
                <h3>Donde estamos:</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.06038912067!2d-64.26438422252431!3d-31.399434162351472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1647366496040!5m2!1ses!2sar" width={200} height={150} style={{ border: '1px groove #6464614f' }} allowFullScreen loading="lazy" />
            </div>
        </footer>
    )
}

export default Footer;