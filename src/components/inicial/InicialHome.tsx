import 'react'
import iphone_image from '/iphone_image.svg'
import seta_baixo from '/arrow-down.png'
import android from '/android.png'

function InicialHome() {
    return (
        <div className='flex justify-between items-center px-16'>
            <div className='w-1/2 pt-[150px] ml-[130px]'>
                <div className='flex h-10 items-center justify-start bg-[#272020] px-4 py-2 w-[175px] rounded-[100px]'>
                    <div className='rounded-[100px] bg-[#14DC49] h-[8px] w-[8px] mr-2'></div>
                    <span className='text-[16px] opacity-50 font-[500] tracking-[0.15px] font-jetbrains'>Java & Kotlin</span>
                </div>

                <div className='mt-[40px]'>
                    <h2 className='text-[64px] font-jetbrains tracking-[0.15px]'>
                        Desenvolvimento de
                        <span className='border-b-12 border-solid border-b-[#DC143C] mb-[-20px]'> Software</span> de Alta
                        Performance
                    </h2>
                    <p className='text-[24px] opacity-50 font-[500] tracking-[0.15px] mt-[40px]'>
                        Especializado em desenvolvimento Android e aplicações empresariais com Java e Kotlin
                    </p>
                </div>
                <div className='flex justify-start'>

                    <button className='flex bg-[#DC143C] w-[220px] h-[48px] p-2 mt-[40px] w-1/2  justify-center place-items-center'>
                        <span className='font-jetbrains '>Ver Projetos</span>
                        <img src={seta_baixo} />
                    </button>
                    <h1 className='text-8x1 place-content-center ml-12'>|</h1>

                    <span className='place-content-center p-12 font-jetbrains'>Entre em contato</span>

                </div>


                <section className='w-4xl'>
                    <h1 className='font-jetbrains mt-[200px] text-[48px]'>Desenvolvedor apaixonado por tecnologia</h1>

                    <p className='text-[24px] opacity-50 max-w-5x1 font-[500] tracking-[0.15px] text-left mt-[40px] text-sm/14'>
                        Sou um desenvolvedor Java Back-end com 1 ano de experiência em Spring Boot, JPA, Docker, AWS (S3, SES) e no desenvolvimento e deploy de APIs. Estou sempre aprimorando minhas habilidades para criar soluções robustas e escaláveis.

                        No Android, tenho 4 anos de experiência, desenvolvendo aplicativos tanto em Java quanto Kotlin. Tenho domínio de MVC, MVP, MVVM, Clean Architecture, SQLite, além de Jetpack Compose e componentes de View (XML). Também sei publicar aplicativos na Play Store, monitorá-los, integrar Google Maps, CameraX, push notifications e muito mais.

                        Já desenvolvi projetos em React, incluindo este próprio portfólio. Embora não seja minha especialidade, consigo construir aplicações funcionais e bem estruturadas quando necessário.

                        Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e entregar soluções de alta qualidade! 🚀                    </p>
                </section>

            </div>

            <div className="w-1/2 flex flex-col justify-between items-center self-stretch h-full">
                <img className="mt-64" src={iphone_image} alt="iPhone" />
                <img className="m" src={android} alt="Android" />
            </div>
        </div>
    )
}


export default InicialHome;