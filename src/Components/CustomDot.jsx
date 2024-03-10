export const CustomDot = ({ onClick, active }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      width: '50px',
      height: '4px',
      backgroundColor: active ? '#000' : '#ccc',
      borderRadius: '50%',
      border: 'none',
      margin: '0 10px',
      cursor: 'pointer',
    }}
  />
);