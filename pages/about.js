import Header from '../components/Header'
import styles from '../styles/header.module.scss'

export default function about(){

    return(
        <>
        <Header/>
        <div className={styles.containerAbout}>
            
            <h1>About this project</h1>

        <section>


            <p>
                Página realizada usando <strong>Nextjs</strong> con los componentes de <strong>Reactjs</strong> 
            </p>
            <p>
                Gracias a este pequeño proyecto se logró aprender el uso de los Hooks de React como lo fueron: <p>useState</p><p>useEfect</p><p>useContext</p> También temas importantes como la paginación con Nextjs y creación de páginas dínamicas.<br/>
            </p>

<<<<<<< HEAD
            <p>Basado en los comics de <a href="https://xkcd.com/" rel="noreferrer" target='_blank' >xkcd</a>. Fueron extraidos los datos haciendo un pequeño scraping de la API de su creador, para de esa manera tener un archivo con toda la información de cerca de 80 viñetas que fueron consultadas.</p>
=======
            <p>Basado en los comics de <a href="https://xkcd.com/" target='_blank' >xkcd</a>. Fueron extraidos los datos haciendo un pequeño scraping de la API de su creador, para de esa manera tener un archivo con toda la información de cerca de 80 viñetas que fueron consultadas.</p>
>>>>>>> ccebbf76f4181e89f4f45983ba8b5e5322575673

        </section>
        
        </div>
            <div className={styles.footerAbout}>
                <p>Desing by A.V.XC</p>
                <div className={styles.foterIconsAbout}>
<<<<<<< HEAD
                 <a target='_blank'  rel="noreferrer" href='https://twitter.com/avxcdeveloper'>
                <i className="bi bi-twitter"></i>
                </a>   
                <a target='_blank' rel="noreferrer"  href='https://www.tiktok.com/@avxc.dev?_t=8VMXUQ1YSBh&_r=1'>
                <i className="bi bi-tiktok"></i>
                </a>
                <a target='_blank' rel="noreferrer"  href='https://github.com/av952'>
                <i className="bi bi-github"></i>
=======
                 <a target='_blank' href='https://twitter.com/avxcdeveloper'>
                <i class="bi bi-twitter"></i>
                </a>   
                <a target='_blank' href='https://www.tiktok.com/@avxc.dev?_t=8VMXUQ1YSBh&_r=1'>
                <i class="bi bi-tiktok"></i>
                </a>
                <a target='_blank' href='https://github.com/av952'>
                <i class="bi bi-github"></i>
>>>>>>> ccebbf76f4181e89f4f45983ba8b5e5322575673
                </a>
                </div>
            </div>
        </>
    )
}