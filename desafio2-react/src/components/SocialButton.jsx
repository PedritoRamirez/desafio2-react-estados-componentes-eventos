
export default function SocialButton({ icono }) {
  return (
    <button style={{padding:'15px',borderRadius:'100%'}}>
      <i className={icono}></i>
    </button>
  );
}
