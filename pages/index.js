import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

export default function LaporanCampers() {
  const [form, setForm] = useState({
    ibadah: "",
    koordinator: "",
    crew: "",
    kamera: "",
    tripod: "",
    wireless: "",
    bateraiAwal: "",
    bateraiAkhir: "",
    htAwal: "",
    htAkhir: "",
    headphone: "",
    tambahan: "",
    kendala: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Laporan berhasil disimpan!\n" + JSON.stringify(form, null, 2));
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Laporan Campers Mingguan", 20, 20);
    let y = 30;
    Object.entries(form).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 20, y);
      y += 10;
    });
    doc.save("laporan-campers.pdf");
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet([form]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan");
    XLSX.writeFile(workbook, "laporan-campers.xlsx");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">📋 Laporan Campers Mingguan</h1>

      <Card className="shadow-lg">
        <CardContent className="space-y-3 p-4">
          <Input placeholder="Nama Ibadah" name="ibadah" onChange={handleChange} />
          <Input placeholder="Koordinator / Wakil" name="koordinator" onChange={handleChange} />
          <Input placeholder="Crew yang bertugas" name="crew" onChange={handleChange} />

          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Jumlah Kamera" name="kamera" onChange={handleChange} />
            <Input placeholder="Jumlah Tripod" name="tripod" onChange={handleChange} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Wireless Cam Terpakai" name="wireless" onChange={handleChange} />
            <Input placeholder="Headphone Terpakai" name="headphone" onChange={handleChange} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="% Baterai Awal" name="bateraiAwal" onChange={handleChange} />
            <Input placeholder="% Baterai Akhir" name="bateraiAkhir" onChange={handleChange} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="% HT Awal" name="htAwal" onChange={handleChange} />
            <Input placeholder="% HT Akhir" name="htAkhir" onChange={handleChange} />
          </div>

          <Textarea placeholder="Peralatan Tambahan" name="tambahan" onChange={handleChange} />
          <Textarea placeholder="Kendala / Informasi Tambahan" name="kendala" onChange={handleChange} />

          <div className="flex gap-2 mt-4">
            <Button className="flex-1" onClick={handleSubmit}>Simpan</Button>
            <Button className="flex-1" onClick={exportPDF}>Export PDF</Button>
            <Button className="flex-1" onClick={exportExcel}>Export Excel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
