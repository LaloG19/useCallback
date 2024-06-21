
export default function Kaban(){
    return (
        <div className=' w-[90vw] bg-purple-600 min-h-[80vh] flex flex-row justify-between rounded-xl overflow-hidden p-4'>
            <section className="w-[29vw] min-h-full rounded-lg bg-red-500">
                <h2 className="text-center pt-4 uppercase tracking-widest font-bold"> Por hacer </h2>
                <div className="bg-orange-600 w-full min-h-[60vh] mt-6 rounded-lg">
                </div>
            </section>
            <section className="w-[29vw] min-h-full rounded-lg bg-yellow-500">
                <h2 className="text-center pt-4 uppercase tracking-widest font-bold"> Haciendo </h2>
                <div className="bg-orange-600 w-full min-h-[60vh] mt-6 rounded-lg">
                </div>
            </section>
            <section className="w-[29vw] min-h-full rounded-lg bg-green-500">
                <h2 className="text-center pt-4 uppercase tracking-widest font-bold"> Completo </h2>
                <div className="bg-orange-600 w-full min-h-[60vh] mt-6 rounded-lg">
                </div>
            </section>
        </div>
    )
}