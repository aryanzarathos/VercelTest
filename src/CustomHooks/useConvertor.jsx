export const useConvertor = () => {
  const [rgb, setRgb] = useState('');

  const convertHexToRgb = (hex) => {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgbValue = `rgb(${r}, ${g}, ${b})`;
    setRgb(rgbValue);
  };

  return { rgb, convertHexToRgb };
};

export const useHexToRgba = () => {
  const [rgba, setRgba] = useState('');

  const convertHexToRgba = (hex, opacity) => {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgbaValue = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    setRgba(rgbaValue);
  };

  return { rgba, convertHexToRgba };
};