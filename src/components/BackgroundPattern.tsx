const BackgroundPattern = () => (
    // its just repeating dots, and the gradient is so that it blends and like isnt that visible so its like texturey yk
  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px'}}/>
);

export default BackgroundPattern;
