export default function WhatsApp({ whatsappNumber,classeIcon,icon }) {
    const imgStyle = {
        position: "fixed",
        bottom: "100px",
        right:"5%",
        height: "auto", // Para manter a proporção,
        zIndex:"3"
    };

    return (
        <div>
            <a href={whatsappNumber}>
            <img className={classeIcon} style={imgStyle} src={icon} alt="WhatsApp" />
            </a>
        </div>
    );
}
