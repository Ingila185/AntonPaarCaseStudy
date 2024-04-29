import { useTheme } from "../hooks/useTheme";

const Charts = () => 
{
    const { theme } = useTheme();

    return (
            <p  className={`p-2 ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>
                Dry-Hopping for 48 hours at normal fermentation temps once the fermentation has slowed significantly. </p>    
    )
}


export default Charts;