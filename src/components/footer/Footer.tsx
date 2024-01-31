import { YoutubeLogo } from "@phosphor-icons/react"
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"

function Footer() {
    return (
        <footer className="flex flex-col bg-blue-200 p-2">
            <div className="grid grid-cols-3 px-28 py-2 text-purple-950 font-semibold">
                <div className="flex flex-col ml-10 ">
                    <img src="https://i.ibb.co/ftVnSQL/Logo-Minimalista-Farm-cia-Azul-e-Verde.png"
                         alt="Logo-Minimalista-Farm-cia-Azul-e-Verde" className="ml-[-50%]" style={{width: "50%"}} />
                </div>
                <div className="flex flex-row justify-center gap-60">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold py-3">Institucional</h3>
                        <p className="hover:underline cursor-pointer">Quem somos</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold py-3">Dúvidas</h3>
                        <p className="hover:underline cursor-pointer">Formas de pagamento</p>
                        <p className="hover:underline cursor-pointer">Como comprar</p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold py-3">Promoções</h3>
                        <p className="hover:underline cursor-pointer">Cosmeticos</p>
                        <p className="hover:underline cursor-pointer">Medicamentos</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end font-bold text-xs py-1">
                <div id="icon" className="flex flex-row justify-end gap-5 mr-0 mt-[-7%]">
                    <InstagramLogo size={40} weight="bold" color="green"></InstagramLogo>
                    <FacebookLogo size={40} weight="bold" color="green"></FacebookLogo>
                    <YoutubeLogo size={40} weight="bold" color="green"></YoutubeLogo>
                    <LinkedinLogo size={40} weight="bold" color="green"></LinkedinLogo>
                </div>
            </div>
        </footer>
    )
}

export default Footer
