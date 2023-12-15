"use client"

export default function Toolbar() {
    return (
        <div className="relative">
            <section className="bg-purple-500 absolute w-full h-[250px] z-10 bottom-0">
                <p>Fnyf</p>
            </section>
            <nav style={{backgroundImage: "url(/toolbar.svg)"}} className="h-[100px] bg-no-repeat bg-center relative z-50">

            </nav>
        </div>
    )
}