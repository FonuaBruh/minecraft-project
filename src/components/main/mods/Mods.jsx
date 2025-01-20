import styles from './Mods.module.css'
import modsBg from './mods_header.jpg'
import { useState } from 'react'
import botania from './botania.png'
import create from './create.jpg'
import divine from './divine.jpg'
import twilight from './twilight.png'
import towers from './towers.png'
import farmer from './farmer.png'
import draconic from './draconic.jpg'
import industrial from './industrial_craft_2.jpg'
import thaumcraft from './thaumcraft.png'
import supp from './supp.png'



const modsData = [
    {
        id: 1,
        image: thaumcraft,
        title: 'Thaumcraft',
        description: 'Изучение этого мода очень интересное, вы будете открывать множество исследований, изучать аспекты, создавать алтари с помощью которого вы будете делать таинственные магические артефакты.',
        category: 'Магические',
        link: 'https://www.curseforge.com/minecraft/mc-mods/thaumcraft'
    },
    {
        id: 2,
        image: divine,
        title: 'DivineRPG',
        description: 'Divine RPG — одна из крупнейших модификаций для Minecraft. Она массово расширяет игру, добавляя в мир большое разнообразие мобов, измерений, инструментов, оружия, брони, блоков, предметов.',
        category: 'RPG',
        link: 'https://www.curseforge.com/minecraft/mc-mods/official-divinerpg'
    },
    {
        id: 3,
        image: industrial,
        title: 'Industrial Craft 2',
        description: 'Большой и старый технический мод, который дарит игроку множество работающих на электричестве механизмов для самых разных сфер игровой жизни, включая добычу руд, обработку ресурсов и управление сельским хозяйством.',
        category: 'Технические',
        link: 'https://www.curseforge.com/minecraft/mc-mods/industrial-craft'
    },
    {
        id: 4,
        image: create,
        title: 'Create',
        description: 'Create - это модификация для Minecraft созданная simibubi, позволяющая создавать штуковины и автоматизировать процесс используя силу вращения.',
        category: 'Технические',
        link: 'https://www.curseforge.com/minecraft/mc-mods/create'
    },
    {
        id: 5,
        image: draconic,
        title: 'Draconic Evolution',
        description: 'Draconic Evolution - это популярный индустриальный мод который сочетает в себе магию и технологии и позволяет создать чрезвычайно мощные предметы.',
        category: 'RPG',
        link: 'https://www.curseforge.com/minecraft/mc-mods/draconic-evolution'
    },
    {
        id: 6,
        image: farmer,
        title: "Farmer's Delight",
        description: 'Используя простую систему приготовления и несколько знакомых ингредиентов, вы сможете приготовить самые разнообразные сытные блюда.',
        category: 'Декор',
        link: 'https://www.curseforge.com/minecraft/mc-mods/farmers-delight'
    },
    {
        id: 7,
        image: botania,
        title: 'Botania',
        description: 'Botania — это технический мод, посвященный природной магии. Геймплей сосредоточен на создании волшебных цветов и устройств с использованием маны, силы земли.',
        category: 'Магические',
        link: 'https://www.curseforge.com/minecraft/mc-mods/botania'
    },
    {
        id: 8,
        image: supp,
        title: 'Supplementaries',
        description: 'Supplementaries — это легко настраиваемый мод Forge, ориентированный на добавление ценного контента, который заполняет пробелы, которые есть в ваниле.',
        category: 'Декор',
        link: 'https://www.curseforge.com/minecraft/mc-mods/supplementaries'
    },
    {
        id: 9,
        image: twilight,
        title: 'Twilight Forest',
        description: 'Twilight Forest — это мод для исследования измерений, ориентированный на приключения, который отправит вас в путешествие, где вы встретите странных существ, исследуете подземелья и многое другое.',
        category: 'RPG',
        link: 'https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest'
    },
    {
        id: 10,
        image: towers,
        title: 'Towns and Towers',
        description: 'Towns & Towers — это мод, целью которого является расширение обновления 1.14, созданного Mojang, добавление новых деревень, аванпостов грабителей и даже совершенно новых кораблей.',
        category: 'RPG',
        link: 'https://www.curseforge.com/minecraft/mc-mods/supplementaries'
    }
];

const buttons = [
    { text: 'Все'},
    { text: 'Технические'},
    { text: 'Магические'},
    { text: 'RPG'},
    { text: 'Декор'},
];

const Mods = () => {
    
    const [filter, setFilter] = useState('Все');

    const filteredMods = filter === 'Все'
        ? modsData
        : modsData.filter(mod => mod.category === filter);

    return (
        <div className={styles.container}>
            <div className={styles.content_bar} style={{ backgroundImage: `url(${modsBg})` }}>
                <h1>Популярные моды</h1>
                <h2>Библиотека популярных модов с фильтрами</h2>
                <div className={styles.content_buttons}>
                {buttons.map((button, index) =>(
                    <button key={index} onClick={() => setFilter(button.text)}>{button.text}</button>
                ))}
                </div>
            </div>
            <div className={styles.content_main}>
                {filteredMods.map(mod =>(
                    <div key={mod.id} style={{ width: '33%', padding: '10px'}} className={styles.content_card}>
                        <img src={mod.image} alt={mod.title} style={{ width: '100%' }} />
                        <h3>{mod.title}</h3>
                        <p>{mod.description}</p>
                        <a href={mod.link} target='_blank' rel='noopener noreferrer'>
                            Скачать мод
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Mods