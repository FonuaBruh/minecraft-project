import bgImage from './header_bg.jpg'
import styles from './Header.module.css'
import Button from '../Button/Button'
export default function Header() {
    
    const buttons = [
        { text: 'Моды', color: 'linear-gradient(to left bottom, #ae4685, #b3407b, #b73a71, #ba3566, #bc305b)'},
        { text: 'Сервера', color: 'linear-gradient(to left bottom, #aaae46, #afa73f, #b4a038, #b89933, #bc9130)'},
        { text: 'Текстуры', color: 'linear-gradient(to left bottom, #46aaae, #139fb6, #0092bc, #0084bf, #3073bc)'},
        { text: 'Шейдеры', color: 'linear-gradient(to left bottom, #46ae6a, #41b25f, #3fb652, #40b943, #43bc30)'},
    ];
    
    return (
        
        <header className={styles.header_container} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={styles.header_content}>
                <h1>Global Minecraft Project</h1>
                <h2>База знаний для комфортной и веселой игры</h2>
                <div className={styles.header_buttons_container}>
                    {buttons.map((buttons, index) => (
                        <Button key={index} text={buttons.text} color={buttons.color}></Button>
                    ))}
                </div>
            </div>
        </header>
    )
}