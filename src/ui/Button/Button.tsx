import { ButtonProps } from './types.ts';

const Button: React.FC<ButtonProps> = ({ icon, style }) => {
    return (
        <button className="p-[10px]" style={style}>
            {icon}
        </button>
    );
};

export default Button;
