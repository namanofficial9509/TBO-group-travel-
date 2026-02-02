import InventoryTable from "@/components/dashboard/InventoryTable";

export default function InventoryPage() {
    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-[1px] bg-[#9a864c]"></div>
                        <span className="text-[10px] font-bold text-[#9a864c] uppercase tracking-[0.3em]">Asset Management</span>
                    </div>
                    <h1 className="font-serif text-5xl text-[#1b170d]">
                        Atelier <span className="italic text-[#ecb613]">Inventory</span>
                    </h1>
                </div>

                <div className="flex gap-4">
                    <button className="px-6 py-3 rounded-full border border-[#e7e1cf] text-[#9a864c] font-bold text-xs uppercase tracking-widest hover:bg-[#ecb613] hover:text-white hover:border-[#ecb613] transition-all">
                        Export Manifest
                    </button>
                    <button className="px-8 py-3 rounded-full bg-[#1b170d] text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-[#ecb613] hover:-translate-y-1 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Add Item / Block
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-[#fcfbf7] p-6 rounded-2xl border border-[#e7e1cf]">
                    <div className="text-[10px] font-bold text-[#9a864c] uppercase tracking-widest mb-2">Total Value</div>
                    <div className="font-serif text-3xl text-[#1b170d]">₹1.4 Cr</div>
                </div>
                <div className="bg-[#fcfbf7] p-6 rounded-2xl border border-[#e7e1cf]">
                    <div className="text-[10px] font-bold text-[#9a864c] uppercase tracking-widest mb-2">Room Blocks</div>
                    <div className="font-serif text-3xl text-[#1b170d]">75 <span className="text-sm font-sans opacity-50 font-normal">/ 120</span></div>
                </div>
                <div className="bg-[#fcfbf7] p-6 rounded-2xl border border-[#e7e1cf]">
                    <div className="text-[10px] font-bold text-[#9a864c] uppercase tracking-widest mb-2">Decor Props</div>
                    <div className="font-serif text-3xl text-[#1b170d]">148 <span className="text-sm font-sans opacity-50 font-normal">Units</span></div>
                </div>
                <div className="bg-[#fcfbf7] p-6 rounded-2xl border border-[#e7e1cf]">
                    <div className="text-[10px] font-bold text-[#9a864c] uppercase tracking-widest mb-2">Pending Actions</div>
                    <div className="font-serif text-3xl text-orange-600">03</div>
                </div>
            </div>

            {/* Main Table */}
            <InventoryTable />
        </div>
    );
}
