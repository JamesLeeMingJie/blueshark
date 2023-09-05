import type { NextPage } from 'next';
import Head from 'next/head';
import React, { FormEvent, useState } from 'react';
// import { FiChevronDown } from 'react-icons/fi';
import { IoChevronUpCircleSharp } from 'react-icons/io5';
import Swal from 'sweetalert2';

import mainBg from '../../../../public/background/form-bg.png';

const Home: NextPage = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [model, setModel] = useState('');
  const [colour, setColour] = useState('blue');
  const [own, setOwn] = useState('');
  const [bikeOwned, setBikeOwned] = useState('');
  const currentTimeDate = new Date().toLocaleString('en-GB');

  // const preferredBikes = (e: React.MouseEvent & {target: HTMLButtonElement}) => {
  //   setModel(e.target.value);
  //   console.log(model);
  // }

  function preferredBikes(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const buttonElement = e.target as HTMLButtonElement;
    setModel(buttonElement.value);
  }

  function preferredColour(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const buttonElement = e.target as HTMLButtonElement;
    setColour(buttonElement.value);
  }

  function ownBiked(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const buttonElement = e.target as HTMLButtonElement;
    setOwn(buttonElement.value);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      fName,
      lName,
      email,
      phone,
      state,
      city,
      model,
      colour,
      own,
      bikeOwned,
      currentTimeDate,
    };

    if (
      fName === '' ||
      lName === '' ||
      email === '' ||
      phone === '' ||
      state === '' ||
      city === '' ||
      model === '' ||
      colour === '' ||
      own === ''
    ) {
      Swal.fire({
        background: '#374047',
        color: '#eeeff1',
        title: 'Error!',
        text: 'Form incomplete, kindly fill in every field.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    } else if (own === 'Yes' && bikeOwned === '') {
      Swal.fire({
        background: '#374047',
        color: '#eeeff1',
        title: 'Error!',
        text: 'Form incomplete, kindly fill in every field.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    } else {
      Swal.fire({
        background: '#374047',
        color: '#eeeff1',
        title: 'Success!',
        text: 'Thank you for submitting your interest!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }

    const rawResponse = await fetch('../api/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();
    console.log(content);

    // Reset the form fields
    setFName('');
    setLName('');
    setEmail('');
    setPhone('');
    setState('');
    setCity('');
    setModel('');
    setColour('');
    setOwn('');
    setBikeOwned('');
  };

  return (
    <div>
      <Head>
        <title>Blueshark R1 | Pre-Order</title>
      </Head>
      <div
        className="sm:bg-right md:bg-center bg-cover bg-no-repeat mt-[12rem] pb-20"
        style={{ backgroundImage: `url(${mainBg.src})` }}
      >
        <div className="text-white text-center text-title font-bold pt-12 pb-12" data-aos="fade-up">
          I'm Interested!
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-10/12 mx-auto flex sm:flex-col lg:flex-row" data-aos="fade-up">
            <div className="flex-6 h-[85vh] 3xl:h-[70vh] min-w-[50%] bg-white sm:px-8 md:px-20 sm:py-8 md:py-12 gap-y-14 shadow-lb">
              <div className="text-h3 pb-12 text-primary">Personal Information</div>
              <div className="flex sm:flex-col md:flex-row pb-16 gap-x-8 sm:gap-y-12">
                <div className="flex flex-col flex-6 gap-y-4">
                  <div className="text-body3 text-black opacity-80">First Name</div>
                  <input
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                    id="fName"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col flex-6 gap-y-4">
                  <div className="text-body3 text-black opacity-80">Last Name</div>
                  <input
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                    className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                    id="lName"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="text-base flex flex-col gap-y-4 pb-16">
                <div className="text-body3 text-black opacity-80">Email Address</div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                  id="email"
                  type="text"
                  placeholder="Johndoe@mail.com"
                />
              </div>
              <div className="text-base flex flex-col gap-y-4 pb-16">
                <div className="text-body3 text-black opacity-80">Phone Number</div>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                  id="number"
                  type="number"
                  placeholder="0123456789"
                />
              </div>
              <div className="flex sm:flex-col md:flex-row gap-x-8 sm:gap-y-12">
                <div className="flex flex-col gap-y-4 flex-6">
                  <div className="text-body3 text-black opacity-80">State</div>
                  <select
                    className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                    id="grid-state"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  >
                    <option value="">[ PLEASE SELECT ]</option>
                    <option value="JOHOR">JOHOR</option>
                    <option value="KEDAH">KEDAH</option>
                    <option value="KELANTAN">KELANTAN</option>
                    <option value="MELAKA">MELAKA</option>
                    <option value="NEGERI SEMBILAN">NEGERI SEMBILAN</option>
                    <option value="PAHANG">PAHANG</option>
                    <option value="PERAK">PERAK</option>
                    <option value="PERLIS">PERLIS</option>
                    <option value="PULAU PINANG">PULAU PINANG</option>
                    <option value="SABAH">SABAH</option>
                    <option value="SARAWAK">SARAWAK</option>
                    <option value="SELANGOR">SELANGOR</option>
                    <option value="TERENGGANU">TERENGGANU</option>
                    <option value="WP KUALA LUMPUR">WP KUALA LUMPUR</option>
                    <option value="WP LABUAN">WP LABUAN</option>
                    <option value="WP PUTRAJAYA">WP PUTRAJAYA</option>
                  </select>
                </div>
                <div className="flex flex-col gap-y-4 flex-6">
                  <div className="text-body3 text-black opacity-80">City</div>
                  {state === '' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      disabled
                    >
                      <option value="">
                        <span className="text-gray">[ PLEASE SELECT ]</span>
                      </option>
                    </select>
                  )}

                  {state === 'JOHOR' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="AYER BALOI">AYER BALOI</option>
                      <option value="AYER HITAM">AYER HITAM</option>
                      <option value="AYER TAWAR 2">AYER TAWAR 2</option>
                      <option value="BANDAR PENAWAR">BANDAR PENAWAR</option>
                      <option value="BANDAR TENGGARA">BANDAR TENGGARA</option>
                      <option value="BATU ANAM">BATU ANAM</option>
                      <option value="BATU PAHAT">BATU PAHAT</option>
                      <option value="BEKOK">BEKOK</option>
                      <option value="BENUT">BENUT</option>
                      <option value="BUKIT GAMBIR">BUKIT GAMBIR</option>
                      <option value="BUKIT KANGKAR">BUKIT KANGKAR</option>
                      <option value="BUKIT KEPONG">BUKIT KEPONG</option>
                      <option value="BUKIT PASIR">BUKIT PASIR</option>
                      <option value="BULOH KASAP">BULOH KASAP</option>
                      <option value="CHAAH">CHAAH</option>
                      <option value="ENDAU">ENDAU</option>
                      <option value="GELANG PATAH">GELANG PATAH</option>
                      <option value="GEMAS BAHRU">GEMAS BAHRU</option>
                      <option value="GERISEK">GERISEK</option>
                      <option value="GRISEK">GRISEK</option>
                      <option value="GUGUSAN TAIB ANDAK">GUGUSAN TAIB ANDAK</option>
                      <option value="JEMALUANG">JEMALUANG</option>
                      <option value="JEMENTAH">JEMENTAH</option>
                      <option value="JERAM BATU">JERAM BATU</option>
                      <option value="JOHOR BAHRU">JOHOR BAHRU</option>
                      <option value="KAHANG">KAHANG</option>
                      <option value="KLUANG">KLUANG</option>
                      <option value="KOTA TINGGI">KOTA TINGGI</option>
                      <option value="KUKUP">KUKUP</option>
                      <option value="KULAI">KULAI</option>
                      <option value="LABIS">LABIS</option>
                      <option value="LAYANG-LAYANG">LAYANG-LAYANG</option>
                      <option value="LEDANG">LEDANG</option>
                      <option value="MAHARANI">MAHARANI</option>
                      <option value="MASAI">MASAI</option>
                      <option value="MERSING">MERSING</option>
                      <option value="MERSING KANAN">MERSING KANAN</option>
                      <option value="MUAR">MUAR</option>
                      <option value="NUSAJAYA">NUSAJAYA</option>
                      <option value="PADANG ENDAU">PADANG ENDAU</option>
                      <option value="PAGOH">PAGOH</option>
                      <option value="PALOH">PALOH</option>
                      <option value="PANCHOR">PANCHOR</option>
                      <option value="PARIT BUNGA">PARIT BUNGA</option>
                      <option value="PARIT JAWA">PARIT JAWA</option>
                      <option value="PARIT RAJA">PARIT RAJA</option>
                      <option value="PARIT SULONG">PARIT SULONG</option>
                      <option value="PASIR GUDANG">PASIR GUDANG</option>
                      <option value="PEKAN NENAS">PEKAN NENAS</option>
                      <option value="PENAWAR">PENAWAR</option>
                      <option value="PENGERANG">PENGERANG</option>
                      <option value="PENGGARAM">PENGGARAM</option>
                      <option value="PONTIAN">PONTIAN</option>
                      <option value="PONTIAN KECHIL">PONTIAN KECHIL</option>
                      <option value="PULAU SATU">PULAU SATU</option>
                      <option value="RENGAM">RENGAM</option>
                      <option value="RENGIT">RENGIT</option>
                      <option value="SEGAMAT">SEGAMAT</option>
                      <option value="SEMERAH">SEMERAH</option>
                      <option value="SENAI">SENAI</option>
                      <option value="SENGGARANG">SENGGARANG</option>
                      <option value="SERI GADING">SERI GADING</option>
                      <option value="SERI MEDAN">SERI MEDAN</option>
                      <option value="SEROM">SEROM</option>
                      <option value="SIMPANG RENGAM">SIMPANG RENGAM</option>
                      <option value="SKUDAI">SKUDAI</option>
                      <option value="SUNGAI MATI">SUNGAI MATI</option>
                      <option value="TANGKAK">TANGKAK</option>
                      <option value="TEBRAU">TEBRAU</option>
                      <option value="ULU TIRAM">ULU TIRAM</option>
                      <option value="YONG PENG">YONG PENG</option>
                    </select>
                  )}

                  {state === 'KEDAH' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="SEMELING">SEMELING</option>
                      <option value="ALOR JANGGUS">ALOR JANGGUS</option>
                      <option value="ALOR MERAH">ALOR MERAH</option>
                      <option value="ALOR SETAR">ALOR SETAR</option>
                      <option value="AMAN JAYA">AMAN JAYA</option>
                      <option value="ANAK BUKIT">ANAK BUKIT</option>
                      <option value="AYER HITAM">AYER HITAM</option>
                      <option value="BALING">BALING</option>
                      <option value="BANDAR BAHARU">BANDAR BAHARU</option>
                      <option value="BATU LIMA SIK">BATU LIMA SIK</option>
                      <option value="BEDONG">BEDONG</option>
                      <option value="BUKIT JENUN">BUKIT JENUN</option>
                      <option value="BUKIT KAYU HITAM">BUKIT KAYU HITAM</option>
                      <option value="BUKIT PINANG">BUKIT PINANG</option>
                      <option value="BUKIT SELAMBAU">BUKIT SELAMBAU</option>
                      <option value="BUKIT TEMBAGA">BUKIT TEMBAGA</option>
                      <option value="CHANGLOON">CHANGLOON</option>
                      <option value="CHANGLUN">CHANGLUN</option>
                      <option value="CHAROK PADANG">CHAROK PADANG</option>
                      <option value="DARULAMAN">DARULAMAN</option>
                      <option value="DURIAN BURUNG">DURIAN BURUNG</option>
                      <option value="GAJAH PUTEH">GAJAH PUTEH</option>
                      <option value="GUAR CEMPEDAK">GUAR CEMPEDAK</option>
                      <option value="GULAU">GULAU</option>
                      <option value="GUNONG">GUNONG</option>
                      <option value="GURUN">GURUN</option>
                      <option value="JENIANG">JENIANG</option>
                      <option value="JITRA">JITRA</option>
                      <option value="JUNJONG">JUNJONG</option>
                      <option value="KARANGAN">KARANGAN</option>
                      <option value="KEPALA BATAS">KEPALA BATAS</option>
                      <option value="KERPAN">KERPAN</option>
                      <option value="KG.BARU KEJAI">KG.BARU KEJAI</option>
                      <option value="KOBAH">KOBAH</option>
                      <option value="KODIANG">KODIANG</option>
                      <option value="KOTA KUALA MUDA">KOTA KUALA MUDA</option>
                      <option value="KOTA SARANG SEMUT">KOTA SARANG SEMUT</option>
                      <option value="KUAH">KUAH</option>
                      <option value="KUALA KEDAH">KUALA KEDAH</option>
                      <option value="KUALA KETIL">KUALA KETIL</option>
                      <option value="KUALA NERANG">KUALA NERANG</option>
                      <option value="KUALA PEGANG">KUALA PEGANG</option>
                      <option value="KUALA SANGLANG">KUALA SANGLANG</option>
                      <option value="KUBUR PANJANG">KUBUR PANJANG</option>
                      <option value="KULIM">KULIM</option>
                      <option value="KUPANG">KUPANG</option>
                      <option value="LABU BESAR">LABU BESAR</option>
                      <option value="LANGGAR">LANGGAR</option>
                      <option value="LANGKAWI">LANGKAWI</option>
                      <option value="LUBOK MERBAU">LUBOK MERBAU</option>
                      <option value="LUBUK BUNTAR">LUBUK BUNTAR</option>
                      <option value="LUNAS">LUNAS</option>
                      <option value="MAHANG">MAHANG</option>
                      <option value="MALAU">MALAU</option>
                      <option value="MERBAU PULAS">MERBAU PULAS</option>
                      <option value="MERBOK">MERBOK</option>
                      <option value="NAKA">NAKA</option>
                      <option value="NAPOH">NAPOH</option>
                      <option value="PADANG LALANG">PADANG LALANG</option>
                      <option value="PADANG MAT SIRAT">PADANG MAT SIRAT</option>
                      <option value="PADANG MEHA">PADANG MEHA</option>
                      <option value="PADANG SANAI">PADANG SANAI</option>
                      <option value="PADANG SERA">PADANG SERA</option>
                      <option value="PADANG SERAI">PADANG SERAI</option>
                      <option value="PARIT PANJANG">PARIT PANJANG</option>
                      <option value="PENDANG">PENDANG</option>
                      <option value="POKOK SENA">POKOK SENA</option>
                      <option value="PULAI">PULAI</option>
                      <option value="RELAU">RELAU</option>
                      <option value="SANGLANG">SANGLANG</option>
                      <option value="SELAMA">SELAMA</option>
                      <option value="SERDANG">SERDANG</option>
                      <option value="SG PETANI">SG PETANI</option>
                      <option value="SIK">SIK</option>
                      <option value="SIMPANG EMPAT">SIMPANG EMPAT</option>
                      <option value="SIMPANG TIGA SUNGAI LIMA">SIMPANG TIGA SUNGAI LIMA</option>
                      <option value="SINGKIR">SINGKIR</option>
                      <option value="SINTOK">SINTOK</option>
                      <option value="SUNGAI KARANGAN">SUNGAI KARANGAN</option>
                      <option value="SUNGAI KECIL ILIR">SUNGAI KECIL ILIR</option>
                      <option value="SUNGAI KOB">SUNGAI KOB</option>
                      <option value="SUNGAI KOROK">SUNGAI KOROK</option>
                      <option value="SUNGAI LALANG">SUNGAI LALANG</option>
                      <option value="SUNGAI LIMAU DALAM">SUNGAI LIMAU DALAM</option>
                      <option value="SUNGAI PETANI">SUNGAI PETANI</option>
                      <option value="SUNGAI TIANG">SUNGAI TIANG</option>
                      <option value="TANAH MERAH">TANAH MERAH</option>
                      <option value="TANJUNG DAWAI">TANJUNG DAWAI</option>
                      <option value="TAWAR">TAWAR</option>
                      <option value="TELOK DATAI">TELOK DATAI</option>
                      <option value="TEROI">TEROI</option>
                      <option value="TIKAM BATU">TIKAM BATU</option>
                      <option value="TOKAI">TOKAI</option>
                      <option value="TUNJANG">TUNJANG</option>
                      <option value="UNIVERSITI UTARA MALAYSIA">UNIVERSITI UTARA MALAYSIA</option>
                      <option value="YAN">YAN</option>
                    </select>
                  )}

                  {state === 'KELANTAN' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="AYER LANAS">AYER LANAS</option>
                      <option value="BACHOK">BACHOK</option>
                      <option value="CHERANG RUKU">CHERANG RUKU</option>
                      <option value="DABONG">DABONG</option>
                      <option value="GUA MUSANG">GUA MUSANG</option>
                      <option value="JELAWAT">JELAWAT</option>
                      <option value="JELI">JELI</option>
                      <option value="KEM DESA PAHLAWAN">KEM DESA PAHLAWAN</option>
                      <option value="KETEREH">KETEREH</option>
                      <option value="KOTA BHARU">KOTA BHARU</option>
                      <option value="KUALA BALAH">KUALA BALAH</option>
                      <option value="KUALA KRAI">KUALA KRAI</option>
                      <option value="MACHANG">MACHANG</option>
                      <option value="MELOR">MELOR</option>
                      <option value="MULONG">MULONG</option>
                      <option value="PASIR MAS">PASIR MAS</option>
                      <option value="PASIR PUTEH">PASIR PUTEH</option>
                      <option value="PASIR PUTIH">PASIR PUTIH</option>
                      <option value="PULAI CHONDONG">PULAI CHONDONG</option>
                      <option value="RANTAU PANJANG">RANTAU PANJANG</option>
                      <option value="SELISING">SELISING</option>
                      <option value="TANAH MERAH">TANAH MERAH</option>
                      <option value="TEMANGAN">TEMANGAN</option>
                      <option value="TUMPAT">TUMPAT</option>
                      <option value="WAKAF BARU, TUMPAT">WAKAF BARU, TUMPAT</option>
                      <option value="WAKAF BHARU">WAKAF BHARU</option>
                    </select>
                  )}

                  {state === 'MELAKA' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="ALOR GAJAH">ALOR GAJAH</option>
                      <option value="ASAHAN">ASAHAN</option>
                      <option value="AYER KEROH">AYER KEROH</option>
                      <option value="AYER MOLEK">AYER MOLEK</option>
                      <option value="BACANG">BACANG</option>
                      <option value="BATANG MELAKA">BATANG MELAKA</option>
                      <option value="BATU BERENDAM">BATU BERENDAM</option>
                      <option value="BEMBAN">BEMBAN</option>
                      <option value="BUKIT BARU">BUKIT BARU</option>
                      <option value="BUKIT RAMBAI">BUKIT RAMBAI</option>
                      <option value="CHIN CHIN">CHIN CHIN</option>
                      <option value="DURIAN TUNGGAL">DURIAN TUNGGAL</option>
                      <option value="JASIN">JASIN</option>
                      <option value="KANDANG">KANDANG</option>
                      <option value="KEM TRENDAK">KEM TRENDAK</option>
                      <option value="KESANG PAJAK">KESANG PAJAK</option>
                      <option value="KLEBANG">KLEBANG</option>
                      <option value="KUALA SUNGAI BARU">KUALA SUNGAI BARU</option>
                      <option value="KUALA SUNGEI BARU">KUALA SUNGEI BARU</option>
                      <option value="LUBOK CHINA">LUBOK CHINA</option>
                      <option value="MASJID TANAH">MASJID TANAH</option>
                      <option value="MELAKA">MELAKA</option>
                      <option value="MERLIMAU">MERLIMAU</option>
                      <option value="NYALAS">NYALAS</option>
                      <option value="PAYA RUMPUT">PAYA RUMPUT</option>
                      <option value="PULAU SEBANG">PULAU SEBANG</option>
                      <option value="REMBIA">REMBIA</option>
                      <option value="SELANDAR">SELANDAR</option>
                      <option value="SEMPANG BEKOH">SEMPANG BEKOH</option>
                      <option value="SUNGAI RAMBAI">SUNGAI RAMBAI</option>
                      <option value="SUNGAI UDANG">SUNGAI UDANG</option>
                      <option value="SUNGEI RAMBAI">SUNGEI RAMBAI</option>
                      <option value="SUNGEI UDANG">SUNGEI UDANG</option>
                      <option value="TANGGA BATU">TANGGA BATU</option>
                      <option value="TANJONG KLING">TANJONG KLING</option>
                    </select>
                  )}

                  {state === 'NEGERI SEMBILAN' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="AIR KUNING">AIR KUNING</option>
                      <option value="AIR MAWANG">AIR MAWANG</option>
                      <option value="AYER KUNING">AYER KUNING</option>
                      <option value="AYER KUNING SELATAN">AYER KUNING SELATAN</option>
                      <option value="BAGAN PINANG">BAGAN PINANG</option>
                      <option value="BAHAU">BAHAU</option>
                      <option value="BARU ENSTEK">BARU ENSTEK</option>
                      <option value="BARU KOTA SRI MAS">BARU KOTA SRI MAS</option>
                      <option value="BATU KIKIR">BATU KIKIR</option>
                      <option value="BROGA">BROGA</option>
                      <option value="BUKIT GELUGOR">BUKIT GELUGOR</option>
                      <option value="BUKIT KEPAYANG">BUKIT KEPAYANG</option>
                      <option value="BUKIT PELANDOK">BUKIT PELANDOK</option>
                      <option value="BUKTI">BUKTI</option>
                      <option value="CHEMBONG">CHEMBONG</option>
                      <option value="CHENGKAU">CHENGKAU</option>
                      <option value="CHUAH">CHUAH</option>
                      <option value="DANGI">DANGI</option>
                      <option value="DANGI BARU">DANGI BARU</option>
                      <option value="DUSUN SETIA">DUSUN SETIA</option>
                      <option value="GEMAS">GEMAS</option>
                      <option value="GEMENCHEH BAHRU">GEMENCHEH BAHRU</option>
                      <option value="GUNUNG PASIR">GUNUNG PASIR</option>
                      <option value="JEMIMA">JEMIMA</option>
                      <option value="JOHOL">JOHOL</option>
                      <option value="JUASSEH">JUASSEH</option>
                      <option value="KOTA">KOTA</option>
                      <option value="KUALA JELEI">KUALA JELEI</option>
                      <option value="KUALA KLAWANG">KUALA KLAWANG</option>
                      <option value="KUALA PILAH">KUALA PILAH</option>
                      <option value="LABU">LABU</option>
                      <option value="LADANG GEDDES">LADANG GEDDES</option>
                      <option value="LENGGENG">LENGGENG</option>
                      <option value="LINGGI">LINGGI</option>
                      <option value="LUKUT">LUKUT</option>
                      <option value="MAHSAN">MAHSAN</option>
                      <option value="MAMBAU">MAMBAU</option>
                      <option value="MANTIN">MANTIN</option>
                      <option value="MANTIN UTAMA">MANTIN UTAMA</option>
                      <option value="MELANG">MELANG</option>
                      <option value="MERBAU SEMBILAN">MERBAU SEMBILAN</option>
                      <option value="NILAI">NILAI</option>
                      <option value="NILAI UTAMA">NILAI UTAMA</option>
                      <option value="PAJAM">PAJAM</option>
                      <option value="PANCHOR">PANCHOR</option>
                      <option value="PARIT TINGGI">PARIT TINGGI</option>
                      <option value="PAROI">PAROI</option>
                      <option value="PAROI JAYA">PAROI JAYA</option>
                      <option value="PASIR BESAR">PASIR BESAR</option>
                      <option value="PASIR PANJANG">PASIR PANJANG</option>
                      <option value="PEDAS">PEDAS</option>
                      <option value="PENGKALAN KEMPAS">PENGKALAN KEMPAS</option>
                      <option value="PERTANG">PERTANG</option>
                      <option value="PETALING">PETALING</option>
                      <option value="PORT DICKSON">PORT DICKSON</option>
                      <option value="RAHANG BARU">RAHANG BARU</option>
                      <option value="RANTAU">RANTAU</option>
                      <option value="RASAH JAYA">RASAH JAYA</option>
                      <option value="REMBAU">REMBAU</option>
                      <option value="REPAH">REPAH</option>
                      <option value="REPAH JAYA">REPAH JAYA</option>
                      <option value="REPAH PERMAI">REPAH PERMAI</option>
                      <option value="SENALING">SENALING</option>
                      <option value="SENAWANG">SENAWANG</option>
                      <option value="SEREMBAN">SEREMBAN</option>
                      <option value="SEREMBAN 3">SEREMBAN 3</option>
                      <option value="SEREMBAN JAYA">SEREMBAN JAYA</option>
                      <option value="SEREMBAN UTAMA">SEREMBAN UTAMA</option>
                      <option value="SERI JEMPOL">SERI JEMPOL</option>
                      <option value="SERI KENDONG">SERI KENDONG</option>
                      <option value="SERI KOTA">SERI KOTA</option>
                      <option value="SERTING">SERTING</option>
                      <option value="SERTING TENGAH">SERTING TENGAH</option>
                      <option value="SETUL">SETUL</option>
                      <option value="SHAH BANDAR">SHAH BANDAR</option>
                      <option value="SIKAMAT">SIKAMAT</option>
                      <option value="SIMPANG DURIAN">SIMPANG DURIAN</option>
                      <option value="SIMPANG PERTANG">SIMPANG PERTANG</option>
                      <option value="SUNGAI GADUT">SUNGAI GADUT</option>
                      <option value="SUNGAI MENYALA">SUNGAI MENYALA</option>
                      <option value="SUNGAI MUNTOH">SUNGAI MUNTOH</option>
                      <option value="TAMAN SEREMBAN">TAMAN SEREMBAN</option>
                      <option value="TAMPIN">TAMPIN</option>
                      <option value="TAMPIN TENGAH">TAMPIN TENGAH</option>
                      <option value="TANAH MERAH SELATAN">TANAH MERAH SELATAN</option>
                      <option value="TANAH MERAH UTARA">TANAH MERAH UTARA</option>
                      <option value="TANJUNG IPOH">TANJUNG IPOH</option>
                      <option value="TELUK KEMANG">TELUK KEMANG</option>
                      <option value="TIROI">TIROI</option>
                      <option value="TITI">TITI</option>
                      <option value="ULU BERANANG">ULU BERANANG</option>
                    </select>
                  )}

                  {state === 'PAHANG' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="BALOK">BALOK</option>
                      <option value="BANDAR BERA">BANDAR BERA</option>
                      <option value="BANDAR PUSAT JENGKA">BANDAR PUSAT JENGKA</option>
                      <option value="BANDAR TUN ABDUL RAZAK">BANDAR TUN ABDUL RAZAK</option>
                      <option value="BENTA">BENTA</option>
                      <option value="BENTONG">BENTONG</option>
                      <option value="BERINCHANG">BERINCHANG</option>
                      <option value="BESERAH">BESERAH</option>
                      <option value="BRINCHANG">BRINCHANG</option>
                      <option value="BUKIT FRASER">BUKIT FRASER</option>
                      <option value="BUKIT GOH">BUKIT GOH</option>
                      <option value="BUKIT KUIN">BUKIT KUIN</option>
                      <option value="CENUR">CENUR</option>
                      <option value="CEROH">CEROH</option>
                      <option value="CHENOR">CHENOR</option>
                      <option value="CHINI">CHINI</option>
                      <option value="DAMAK">DAMAK</option>
                      <option value="DONG">DONG</option>
                      <option value="DURIAN TAWAR">DURIAN TAWAR</option>
                      <option value="ENDAU">ENDAU</option>
                      <option value="GAMBANG">GAMBANG</option>
                      <option value="GENTING HIGHLANDS">GENTING HIGHLANDS</option>
                      <option value="JENGKA">JENGKA</option>
                      <option value="JERANSANG">JERANSANG</option>
                      <option value="JERANTUT">JERANTUT</option>
                      <option value="KARAK">KARAK</option>
                      <option value="KECAU TUI">KECAU TUI</option>
                      <option value="KEMAYAN">KEMAYAN</option>
                      <option value="KERAMBIT">KERAMBIT</option>
                      <option value="KERDAU">KERDAU</option>
                      <option value="KUALA KERAU">KUALA KERAU</option>
                      <option value="KUALA KRAU">KUALA KRAU</option>
                      <option value="KUALA LIPIS">KUALA LIPIS</option>
                      <option value="KUALA PAHANG">KUALA PAHANG</option>
                      <option value="KUALA ROMPIN">KUALA ROMPIN</option>
                      <option value="KUALA TEMBELING">KUALA TEMBELING</option>
                      <option value="KUANTAN">KUANTAN</option>
                      <option value="LANCANG">LANCANG</option>
                      <option value="LANCHANG">LANCHANG</option>
                      <option value="LUBUK TAMANG">LUBUK TAMANG</option>
                      <option value="LURAH BILUT">LURAH BILUT</option>
                      <option value="MARAN">MARAN</option>
                      <option value="MELA">MELA</option>
                      <option value="MENGKARAK">MENGKARAK</option>
                      <option value="MENGKUANG">MENGKUANG</option>
                      <option value="MENTAKAB">MENTAKAB</option>
                      <option value="MERAPUH">MERAPUH</option>
                      <option value="MUADZAM">MUADZAM</option>
                      <option value="MUADZAM SHAH">MUADZAM SHAH</option>
                      <option value="NENASI">NENASI</option>
                      <option value="PADANG TENGKU">PADANG TENGKU</option>
                      <option value="PEKAN">PEKAN</option>
                      <option value="PENJUM">PENJUM</option>
                      <option value="PONTIAN">PONTIAN</option>
                      <option value="RAUB">RAUB</option>
                      <option value="RINGLET">RINGLET</option>
                      <option value="ROMPIN">ROMPIN</option>
                      <option value="RPSB KG PAGAR">RPSB KG PAGAR</option>
                      <option value="SEGA">SEGA</option>
                      <option value="SRI JAYA">SRI JAYA</option>
                      <option value="SUNGAI KOYAN">SUNGAI KOYAN</option>
                      <option value="SUNGAI LEMBING">SUNGAI LEMBING</option>
                      <option value="TAMAN JELAI">TAMAN JELAI</option>
                      <option value="TANAH RATA">TANAH RATA</option>
                      <option value="TANJUNG LUMPUR">TANJUNG LUMPUR</option>
                      <option value="TEMERLOH">TEMERLOH</option>
                      <option value="TERANUM">TERANUM</option>
                      <option value="TERAS">TERAS</option>
                      <option value="TIOMAN">TIOMAN</option>
                      <option value="TRIANG">TRIANG</option>
                    </select>
                  )}

                  {state === 'PERAK' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="AYER TAWAR">AYER TAWAR</option>
                      <option value="BA">BA</option>
                      <option value="BAGAN DATOH">BAGAN DATOH</option>
                      <option value="BAGAN DATUK">BAGAN DATUK</option>
                      <option value="BAGAN SERAI">BAGAN SERAI</option>
                      <option value="BANDAR SERI ISKANDAR">BANDAR SERI ISKANDAR</option>
                      <option value="BANIR">BANIR</option>
                      <option value="BANTANG">BANTANG</option>
                      <option value="BATAK RABIT">BATAK RABIT</option>
                      <option value="BATU DUA PULOH">BATU DUA PULOH</option>
                      <option value="BATU GAJAH">BATU GAJAH</option>
                      <option value="BATU KURAU">BATU KURAU</option>
                      <option value="BEHRANG STESEN">BEHRANG STESEN</option>
                      <option value="BERUAS">BERUAS</option>
                      <option value="BIDOR">BIDOR</option>
                      <option value="BIKAM">BIKAM</option>
                      <option value="BOTA">BOTA</option>
                      <option value="BRUAS">BRUAS</option>
                      <option value="BUKIT MERAH">BUKIT MERAH</option>
                      <option value="CHANGKAT JERING">CHANGKAT JERING</option>
                      <option value="CHANGKAT KERUING">CHANGKAT KERUING</option>
                      <option value="CHEMOR">CHEMOR</option>
                      <option value="CHENDERIANG">CHENDERIANG</option>
                      <option value="CHENDERONG BALAI">CHENDERONG BALAI</option>
                      <option value="CHIKUS">CHIKUS</option>
                      <option value="DAMAR LAUT">DAMAR LAUT</option>
                      <option value="DEGONG">DEGONG</option>
                      <option value="ENGGOR">ENGGOR</option>
                      <option value="GERIK">GERIK</option>
                      <option value="GOPENG">GOPENG</option>
                      <option value="GUNONG PONDOK">GUNONG PONDOK</option>
                      <option value="GURNEY">GURNEY</option>
                      <option value="HUTAN MELINTANG">HUTAN MELINTANG</option>
                      <option value="INTAN">INTAN</option>
                      <option value="IPOH">IPOH</option>
                      <option value="IPOH SELATAN">IPOH SELATAN</option>
                      <option value="IPOH UTARA">IPOH UTARA</option>
                      <option value="JALAN BARU">JALAN BARU</option>
                      <option value="JELAPANG">JELAPANG</option>
                      <option value="JENDARATA">JENDARATA</option>
                      <option value="JERAM">JERAM</option>
                      <option value="JERLUN">JERLUN</option>
                      <option value="KAMPAR">KAMPAR</option>
                      <option value="KAMPUNG GAJAH">KAMPUNG GAJAH</option>
                      <option value="KAMPUNG KEPAYANG">KAMPUNG KEPAYANG</option>
                      <option value="KAMUNTING">KAMUNTING</option>
                      <option value="KANTHAN">KANTHAN</option>
                      <option value="KARAI">KARAI</option>
                      <option value="KATI">KATI</option>
                      <option value="KELIAN INTAN">KELIAN INTAN</option>
                      <option value="KG SUNGAI HAJI MOHAMED">KG SUNGAI HAJI MOHAMED</option>
                      <option value="KOTA BAHARU">KOTA BAHARU</option>
                      <option value="KUALA KANGSAR">KUALA KANGSAR</option>
                      <option value="KUALA KURAU">KUALA KURAU</option>
                      <option value="KUALA SEPETANG">KUALA SEPETANG</option>
                      <option value="LAHAT">LAHAT</option>
                      <option value="LAMBOR KANAN">LAMBOR KANAN</option>
                      <option value="LANGKAP">LANGKAP</option>
                      <option value="LAWIN">LAWIN</option>
                      <option value="LENGGONG">LENGGONG</option>
                      <option value="LUMUT">LUMUT</option>
                      <option value="MALIM NAWAR">MALIM NAWAR</option>
                      <option value="MANJUNG">MANJUNG</option>
                      <option value="MANONG">MANONG</option>
                      <option value="MATANG">MATANG</option>
                      <option value="MENGLEMBU">MENGLEMBU</option>
                      <option value="PADANG RENGAS">PADANG RENGAS</option>
                      <option value="PANGKOR">PANGKOR</option>
                      <option value="PANTAI REMIS">PANTAI REMIS</option>
                      <option value="PAPAN">PAPAN</option>
                      <option value="PARIT">PARIT</option>
                      <option value="PARIT BUNTAR">PARIT BUNTAR</option>
                      <option value="PASIR BOGAK">PASIR BOGAK</option>
                      <option value="PENGKALAN BAHARU">PENGKALAN BAHARU</option>
                      <option value="PENGKALAN HULU">PENGKALAN HULU</option>
                      <option value="PONDOK TANJONG">PONDOK TANJONG</option>
                      <option value="PUSING">PUSING</option>
                      <option value="RANTAU PANJANG">RANTAU PANJANG</option>
                      <option value="SALAK">SALAK</option>
                      <option value="SAUK">SAUK</option>
                      <option value="SEGARI">SEGARI</option>
                      <option value="SELAMA">SELAMA</option>
                      <option value="SELEKOH">SELEKOH</option>
                      <option value="SEPUTEH">SEPUTEH</option>
                      <option value="SERI ISKANDAR">SERI ISKANDAR</option>
                      <option value="SERI MANJONG">SERI MANJONG</option>
                      <option value="SERI MANJUNG">SERI MANJUNG</option>
                      <option value="SETIAWAN">SETIAWAN</option>
                      <option value="SIMPANG">SIMPANG</option>
                      <option value="SIMPANG AMPAT SEMANGGOL">SIMPANG AMPAT SEMANGGOL</option>
                      <option value="SIMPANG EMPAT">SIMPANG EMPAT</option>
                      <option value="SIMPANG LIMA">SIMPANG LIMA</option>
                      <option value="SIMPANG PULAI">SIMPANG PULAI</option>
                      <option value="SIMPANG TIGA">SIMPANG TIGA</option>
                      <option value="SITIAWAN">SITIAWAN</option>
                      <option value="SLIM">SLIM</option>
                      <option value="SLIM RIVER">SLIM RIVER</option>
                      <option value="SUNGAI BAYUR">SUNGAI BAYUR</option>
                      <option value="SUNGAI GEDONG">SUNGAI GEDONG</option>
                      <option value="SUNGAI LESONG">SUNGAI LESONG</option>
                      <option value="SUNGAI PINANG KECHIL">SUNGAI PINANG KECHIL</option>
                      <option value="SUNGAI RAYA">SUNGAI RAYA</option>
                      <option value="SUNGAI SIPUT">SUNGAI SIPUT</option>
                      <option value="SUNGAI SUMUN">SUNGAI SUMUN</option>
                      <option value="SUNGKAI">SUNGKAI</option>
                      <option value="TAIPING">TAIPING</option>
                      <option value="TAMBUN">TAMBUN</option>
                      <option value="TANJONG MALIM">TANJONG MALIM</option>
                      <option value="TANJONG PIANDANG">TANJONG PIANDANG</option>
                      <option value="TANJONG RAMBUTAN">TANJONG RAMBUTAN</option>
                      <option value="TANJONG TUALANG">TANJONG TUALANG</option>
                      <option value="TANJUNG MALIM">TANJUNG MALIM</option>
                      <option value="TAPAH">TAPAH</option>
                      <option value="TAPAH ROAD">TAPAH ROAD</option>
                      <option value="TELUK INTAN">TELUK INTAN</option>
                      <option value="TEMOH">TEMOH</option>
                      <option value="TEMOH STATION">TEMOH STATION</option>
                      <option value="TEROLAK">TEROLAK</option>
                      <option value="TERONOH">TERONOH</option>
                      <option value="TERUNG">TERUNG</option>
                      <option value="TLDM LUMUT">TLDM LUMUT</option>
                      <option value="TROLAK">TROLAK</option>
                      <option value="TRONG">TRONG</option>
                      <option value="TRONOH">TRONOH</option>
                      <option value="ULU BERNAM">ULU BERNAM</option>
                      <option value="ULU KINTA">ULU KINTA</option>
                    </select>
                  )}

                  {state === 'PERLIS' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="ARAU">ARAU</option>
                      <option value="KAKI BUKIT">KAKI BUKIT</option>
                      <option value="KANGAR">KANGAR</option>
                      <option value="KUALA PERLIS">KUALA PERLIS</option>
                    </select>
                  )}

                  {state === 'PULAU PINANG' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="AYER ITAM">AYER ITAM</option>
                      <option value="BALIK PULAU">BALIK PULAU</option>
                      <option value="BATU FERRINGHI">BATU FERRINGHI</option>
                      <option value="BATU MAUNG">BATU MAUNG</option>
                      <option value="BAYAN LEPAS">BAYAN LEPAS</option>
                      <option value="BUKIT MERTAJAM">BUKIT MERTAJAM</option>
                      <option value="BUTTERWORTH">BUTTERWORTH</option>
                      <option value="GELUGOR">GELUGOR</option>
                      <option value="GEORGETOWN">GEORGETOWN</option>
                      <option value="JELUTONG">JELUTONG</option>
                      <option value="KEPALA BATAS">KEPALA BATAS</option>
                      <option value="KUBANG SEMANG">KUBANG SEMANG</option>
                      <option value="NIBONG TEBAL">NIBONG TEBAL</option>
                      <option value="PENAGA">PENAGA</option>
                      <option value="PENANG HILL">PENANG HILL</option>
                      <option value="PERAI">PERAI</option>
                      <option value="PERMATANG PAUH">PERMATANG PAUH</option>
                      <option value="PRAI">PRAI</option>
                      <option value="PULAU PINANG">PULAU PINANG</option>
                      <option value="SEBERANG JAYA">SEBERANG JAYA</option>
                      <option value="SIMPANG AMPAT">SIMPANG AMPAT</option>
                      <option value="SUNGAI JAWI">SUNGAI JAWI</option>
                      <option value="TANJONG BUNGAH">TANJONG BUNGAH</option>
                      <option value="TASEK GELUGOR">TASEK GELUGOR</option>
                    </select>
                  )}

                  {state === 'SABAH' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="BEAUFORT">BEAUFORT</option>
                      <option value="BELURAN">BELURAN</option>
                      <option value="BEVERLY">BEVERLY</option>
                      <option value="BONGAWAN">BONGAWAN</option>
                      <option value="INANAM">INANAM</option>
                      <option value="KENINGAU">KENINGAU</option>
                      <option value="KOTA BELUD">KOTA BELUD</option>
                      <option value="KOTA KINABALU">KOTA KINABALU</option>
                      <option value="KOTA KINABATANGAN">KOTA KINABATANGAN</option>
                      <option value="KOTA MARUDU">KOTA MARUDU</option>
                      <option value="KUALA PENYU">KUALA PENYU</option>
                      <option value="KUDAT">KUDAT</option>
                      <option value="KUNAK">KUNAK</option>
                      <option value="LABUAN">LABUAN</option>
                      <option value="LAHAD DATU">LAHAD DATU</option>
                      <option value="LIKAS">LIKAS</option>
                      <option value="MEMBAKUT">MEMBAKUT</option>
                      <option value="MENUMBOK">MENUMBOK</option>
                      <option value="NABAWAN">NABAWAN</option>
                      <option value="PAMOL">PAMOL</option>
                      <option value="PAPAR">PAPAR</option>
                      <option value="PENAMPANG">PENAMPANG</option>
                      <option value="PUTATAN">PUTATAN</option>
                      <option value="RANAU">RANAU</option>
                      <option value="SANDAKAN">SANDAKAN</option>
                      <option value="SEMPORNA">SEMPORNA</option>
                      <option value="SIPITANG">SIPITANG</option>
                      <option value="TAMBUNAN">TAMBUNAN</option>
                      <option value="TAMPARULI">TAMPARULI</option>
                      <option value="TANJUNG ARU">TANJUNG ARU</option>
                      <option value="TAWAU">TAWAU</option>
                      <option value="TENGHILAN">TENGHILAN</option>
                      <option value="TENOM">TENOM</option>
                      <option value="TUARAN">TUARAN</option>
                    </select>
                  )}

                  {state === 'SARAWAK' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="ASAJAYA">ASAJAYA</option>
                      <option value="BALINGIAN">BALINGIAN</option>
                      <option value="BARAM">BARAM</option>
                      <option value="BAU">BAU</option>
                      <option value="BEKENU">BEKENU</option>
                      <option value="BELAGA">BELAGA</option>
                      <option value="BELAWAI">BELAWAI</option>
                      <option value="BETONG">BETONG</option>
                      <option value="BINTANGOR">BINTANGOR</option>
                      <option value="BINTULU">BINTULU</option>
                      <option value="DALAT">DALAT</option>
                      <option value="DARO">DARO</option>
                      <option value="DEBAK">DEBAK</option>
                      <option value="ENGKILILI">ENGKILILI</option>
                      <option value="JULAU">JULAU</option>
                      <option value="KABONG">KABONG</option>
                      <option value="KANOWIT">KANOWIT</option>
                      <option value="KAPIT">KAPIT</option>
                      <option value="KOTA SAMARAHAN">KOTA SAMARAHAN</option>
                      <option value="KUCHING">KUCHING</option>
                      <option value="LAWAS">LAWAS</option>
                      <option value="LIMBANG">LIMBANG</option>
                      <option value="LINGGA">LINGGA</option>
                      <option value="LONG LAMA">LONG LAMA</option>
                      <option value="LUBOK ANTU">LUBOK ANTU</option>
                      <option value="LUNDU">LUNDU</option>
                      <option value="LUTONG">LUTONG</option>
                      <option value="MATU">MATU</option>
                      <option value="MIRI">MIRI</option>
                      <option value="MUKAH">MUKAH</option>
                      <option value="NANGA MEDAMIT">NANGA MEDAMIT</option>
                      <option value="NIAH">NIAH</option>
                      <option value="PUSA">PUSA</option>
                      <option value="ROBAN">ROBAN</option>
                      <option value="SARATOK">SARATOK</option>
                      <option value="SARIKEI">SARIKEI</option>
                      <option value="SEBAUH">SEBAUH</option>
                      <option value="SEBUYAU">SEBUYAU</option>
                      <option value="SERIAN">SERIAN</option>
                      <option value="SIBU">SIBU</option>
                      <option value="SIBURAN">SIBURAN</option>
                      <option value="SIMUNJAN">SIMUNJAN</option>
                      <option value="SONG">SONG</option>
                      <option value="SPAOH">SPAOH</option>
                      <option value="SRI AMAN">SRI AMAN</option>
                      <option value="SUNDAR">SUNDAR</option>
                      <option value="TATAU">TATAU</option>
                    </select>
                  )}

                  {state === 'SELANGOR' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="AMPANG">AMPANG</option>
                      <option value="ASAM JAWA">ASAM JAWA</option>
                      <option value="BAGAN NAKHODA OMAR">BAGAN NAKHODA OMAR</option>
                      <option value="BAGAN TERAP">BAGAN TERAP</option>
                      <option value="BALAKONG">BALAKONG</option>
                      <option value="BALING">BALING</option>
                      <option value="BANDAR BARU BANGI">BANDAR BARU BANGI</option>
                      <option value="BANDAR BARU HICOM">BANDAR BARU HICOM</option>
                      <option value="BANDAR BARU SALAK TINGGI">BANDAR BARU SALAK TINGGI</option>
                      <option value="BANDAR BARU SUBANG">BANDAR BARU SUBANG</option>
                      <option value="BANDAR BARU SUNGAI BESI">BANDAR BARU SUNGAI BESI</option>
                      <option value="BANDAR BARU SUNGAI BULOH">BANDAR BARU SUNGAI BULOH</option>
                      <option value="BANGI">BANGI</option>
                      <option value="BANGI LAMA">BANGI LAMA</option>
                      <option value="BANTING">BANTING</option>
                      <option value="BATANG BERJUNTAI">BATANG BERJUNTAI</option>
                      <option value="BATANG KALI">BATANG KALI</option>
                      <option value="BATU">BATU</option>
                      <option value="BATU ARANG">BATU ARANG</option>
                      <option value="BATU CAVES">BATU CAVES</option>
                      <option value="BATU EMPAT">BATU EMPAT</option>
                      <option value="BATU GAVES">BATU GAVES</option>
                      <option value="BATU TIGA">BATU TIGA</option>
                      <option value="BERANANG">BERANANG</option>
                      <option value="BESTARI JAYA">BESTARI JAYA</option>
                      <option value="BUKIT BELIMBING">BUKIT BELIMBING</option>
                      <option value="BUKIT BISA">BUKIT BISA</option>
                      <option value="BUKIT CHANGGANG">BUKIT CHANGGANG</option>
                      <option value="BUKIT KEMUNING">BUKIT KEMUNING</option>
                      <option value="BUKIT PRANG">BUKIT PRANG</option>
                      <option value="BUKIT ROTAN">BUKIT ROTAN</option>
                      <option value="BUKIT SUNGAI RAYA">BUKIT SUNGAI RAYA</option>
                      <option value="BUKIT TALANG">BUKIT TALANG</option>
                      <option value="CEMPAKA">CEMPAKA</option>
                      <option value="CHERAS">CHERAS</option>
                      <option value="CHODOI">CHODOI</option>
                      <option value="COUNTRY HEIGHT">COUNTRY HEIGHT</option>
                      <option value="CYBERJAYA">CYBERJAYA</option>
                      <option value="DAMANSARA">DAMANSARA</option>
                      <option value="DATO' BAKAR BAGINDA">DATO' BAKAR BAGINDA</option>
                      <option value="DENGKIL">DENGKIL</option>
                      <option value="DESA PUCHONG">DESA PUCHONG</option>
                      <option value="DESA RAYA">DESA RAYA</option>
                      <option value="GLENMARIE">GLENMARIE</option>
                      <option value="GOMBAK SETIA">GOMBAK SETIA</option>
                      <option value="HICOM">HICOM</option>
                      <option value="HULU LANGAT">HULU LANGAT</option>
                      <option value="JENJAROM">JENJAROM</option>
                      <option value="JENJARUM">JENJARUM</option>
                      <option value="JERAM">JERAM</option>
                      <option value="KACHAU">KACHAU</option>
                      <option value="KAJANG">KAJANG</option>
                      <option value="KALUMPANG">KALUMPANG</option>
                      <option value="KANCHONG">KANCHONG</option>
                      <option value="KANCHONG DARAT">KANCHONG DARAT</option>
                      <option value="KAPAR">KAPAR</option>
                      <option value="KAYU ARA">KAYU ARA</option>
                      <option value="KELANANG BATU ENAM">KELANANG BATU ENAM</option>
                      <option value="KEPONG">KEPONG</option>
                      <option value="KERLING">KERLING</option>
                      <option value="KINRARA">KINRARA</option>
                      <option value="KLANG">KLANG</option>
                      <option value="KUALA KUBU BAHARU">KUALA KUBU BAHARU</option>
                      <option value="KUALA LANGAT">KUALA LANGAT</option>
                      <option value="KUALA SELANGOR">KUALA SELANGOR</option>
                      <option value="KUALA SUNGAI BULOH">KUALA SUNGAI BULOH</option>
                      <option value="KUANG">KUANG</option>
                      <option value="KUNDANG">KUNDANG</option>
                      <option value="LAPANGAN TERBANG ANTARA">LAPANGAN TERBANG ANTARA</option>
                      <option value="MERBAU SEMPAK">MERBAU SEMPAK</option>
                      <option value="MERU">MERU</option>
                      <option value="MIMALAND">MIMALAND</option>
                      <option value="MORIB">MORIB</option>
                      <option value="PANDAMARAN">PANDAMARAN</option>
                      <option value="PARIT BARU">PARIT BARU</option>
                      <option value="PARIT ENAM">PARIT ENAM</option>
                      <option value="PARIT MAHANG">PARIT MAHANG</option>
                      <option value="PARIT SEMBILAN">PARIT SEMBILAN</option>
                      <option value="PASIR PENAMBANG">PASIR PENAMBANG</option>
                      <option value="PENAGA">PENAGA</option>
                      <option value="PENGKALAN KUNDANG">PENGKALAN KUNDANG</option>
                      <option value="PERETAK">PERETAK</option>
                      <option value="PERMATANG PASIR">PERMATANG PASIR</option>
                      <option value="PETALING JAYA">PETALING JAYA</option>
                      <option value="PETALING JAYA SELATAN">PETALING JAYA SELATAN</option>
                      <option value="PORT KLANG">PORT KLANG</option>
                      <option value="PORT SWETTENHAM">PORT SWETTENHAM</option>
                      <option value="PUCHONG">PUCHONG</option>
                      <option value="PUCHONG JAYA">PUCHONG JAYA</option>
                      <option value="PUCHONG PERDANA">PUCHONG PERDANA</option>
                      <option value="RASA">RASA</option>
                      <option value="RAWANG">RAWANG</option>
                      <option value="SABAK">SABAK</option>
                      <option value="SABAK BERNAM">SABAK BERNAM</option>
                      <option value="SAUJANA">SAUJANA</option>
                      <option value="SEKINCHAN">SEKINCHAN</option>
                      <option value="SELAYANG">SELAYANG</option>
                      <option value="SEMENYIH">SEMENYIH</option>
                      <option value="SEPANG">SEPANG</option>
                      <option value="SERDANG">SERDANG</option>
                      <option value="SERENDAH">SERENDAH</option>
                      <option value="SERI KEMBANGAN">SERI KEMBANGAN</option>
                      <option value="SHAH ALAM">SHAH ALAM</option>
                      <option value="SIJANGKANG">SIJANGKANG</option>
                      <option value="SIMPANG BALAK">SIMPANG BALAK</option>
                      <option value="SIMPANG MORIB">SIMPANG MORIB</option>
                      <option value="SIMPANG TIGA IJOK">SIMPANG TIGA IJOK</option>
                      <option value="SRI DAMANSARA">SRI DAMANSARA</option>
                      <option value="SRI NANDING">SRI NANDING</option>
                      <option value="SUBANG">SUBANG</option>
                      <option value="SUBANG JAYA">SUBANG JAYA</option>
                      <option value="SULTAN SULAIMAN">SULTAN SULAIMAN</option>
                      <option value="SUNGAI AIR TAWAR">SUNGAI AIR TAWAR</option>
                      <option value="SUNGAI BESAR">SUNGAI BESAR</option>
                      <option value="SUNGAI BULOH">SUNGAI BULOH</option>
                      <option value="SUNGAI CHIK">SUNGAI CHIK</option>
                      <option value="SUNGAI CHOH">SUNGAI CHOH</option>
                      <option value="SUNGAI HAJI DORANI">SUNGAI HAJI DORANI</option>
                      <option value="SUNGAI KEMBONG BERANANG">SUNGAI KEMBONG BERANANG</option>
                      <option value="SUNGAI LALANG">SUNGAI LALANG</option>
                      <option value="SUNGAI LUI">SUNGAI LUI</option>
                      <option value="SUNGAI MAKAU">SUNGAI MAKAU</option>
                      <option value="SUNGAI MANGGIS">SUNGAI MANGGIS</option>
                      <option value="SUNGAI MERAB">SUNGAI MERAB</option>
                      <option value="SUNGAI NIBONG">SUNGAI NIBONG</option>
                      <option value="SUNGAI PELEK">SUNGAI PELEK</option>
                      <option value="SUNGAI PENCHALA">SUNGAI PENCHALA</option>
                      <option value="SUNGAI PUSU">SUNGAI PUSU</option>
                      <option value="SUNGAI RABA">SUNGAI RABA</option>
                      <option value="SUNGAI SEMBILANG">SUNGAI SEMBILANG</option>
                      <option value="SUNGAI SEPINTAS">SUNGAI SEPINTAS</option>
                      <option value="SUNWAY">SUNWAY</option>
                      <option value="TAMAN KERAMAT">TAMAN KERAMAT</option>
                      <option value="TAMAN PKNS">TAMAN PKNS</option>
                      <option value="TAMBAK JAWA">TAMBAK JAWA</option>
                      <option value="TANJONG DUABELAS">TANJONG DUABELAS</option>
                      <option value="TANJONG KARANG">TANJONG KARANG</option>
                      <option value="TANJONG SEPAT">TANJONG SEPAT</option>
                      <option value="TANJUNG KARANG">TANJUNG KARANG</option>
                      <option value="TANJUNG MAS">TANJUNG MAS</option>
                      <option value="TANJUNG SEPAT">TANJUNG SEPAT</option>
                      <option value="TARUN">TARUN</option>
                      <option value="TELOK">TELOK</option>
                      <option value="TELOK DATOK">TELOK DATOK</option>
                      <option value="TELOK MENEGUN">TELOK MENEGUN</option>
                      <option value="TELOK PANGLIMA GARANG">TELOK PANGLIMA GARANG</option>
                      <option value="TEMPLER">TEMPLER</option>
                      <option value="TONGKAH">TONGKAH</option>
                      <option value="ULU BERNAM">ULU BERNAM</option>
                      <option value="ULU KELANG">ULU KELANG</option>
                      <option value="ULU LANGAT">ULU LANGAT</option>
                      <option value="ULU YAM">ULU YAM</option>
                    </select>
                  )}

                  {state === 'TERENGGANU' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="AIR JERNIH">AIR JERNIH</option>
                      <option value="AIR PUTIH">AIR PUTIH</option>
                      <option value="AJIL">AJIL</option>
                      <option value="AL MUKTATFI BILLAH SHAH">AL MUKTATFI BILLAH SHAH</option>
                      <option value="AYER PUTEH">AYER PUTEH</option>
                      <option value="BUKIT BESI">BUKIT BESI</option>
                      <option value="BUKIT PAYONG">BUKIT PAYONG</option>
                      <option value="BUKIT PAYUNG">BUKIT PAYUNG</option>
                      <option value="CABANG TIGA">CABANG TIGA</option>
                      <option value="CENEH">CENEH</option>
                      <option value="CHALOK">CHALOK</option>
                      <option value="CUKAI">CUKAI</option>
                      <option value="DUNGUN">DUNGUN</option>
                      <option value="HULU TERENGGANU">HULU TERENGGANU</option>
                      <option value="JERTEH">JERTEH</option>
                      <option value="JERTIH">JERTIH</option>
                      <option value="KAMPUNG RAJA">KAMPUNG RAJA</option>
                      <option value="KEMAMAN">KEMAMAN</option>
                      <option value="KEMASEK">KEMASEK</option>
                      <option value="KEMASIK">KEMASIK</option>
                      <option value="KERTEH">KERTEH</option>
                      <option value="KETENGAH JAYA">KETENGAH JAYA</option>
                      <option value="KG RAJA">KG RAJA</option>
                      <option value="KIJAL">KIJAL</option>
                      <option value="KUALA BERANG">KUALA BERANG</option>
                      <option value="KUALA BESUT">KUALA BESUT</option>
                      <option value="KUALA PAKA">KUALA PAKA</option>
                      <option value="KUALA TERENGGANU">KUALA TERENGGANU</option>
                      <option value="MARANG">MARANG</option>
                      <option value="PAKA">PAKA</option>
                      <option value="PERMAISURI">PERMAISURI</option>
                      <option value="SUNGAI TONG">SUNGAI TONG</option>
                    </select>
                  )}

                  {state === 'WP KUALA LUMPUR' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="BANDAR BARU SUNGAI BESI">BANDAR BARU SUNGAI BESI</option>
                      <option value="KEPONG">KEPONG</option>
                      <option value="KUALA LUMPUR">KUALA LUMPUR</option>
                    </select>
                  )}

                  {state === 'WP LABUAN' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="NULL">[ PLEASE SELECT ]</option>
                    </select>
                  )}

                  {state === 'WP PUTRAJAYA' && (
                    <select
                      className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                      id="grid-state"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <option value="">[ PLEASE SELECT ]</option>
                      <option value="PUTRAJAYA">PUTRAJAYA</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-6 h-[85vh] 3xl:h-[70vh] min-w-[50%] bg-white sm:px-8 md:px-20 sm:py-8 md:py-12 gap-y-14 shadow-rb sm:mt-[-1px] md:mt-0">
              <div>
                <div className="text-h3 pb-12 text-primary font-bold leading-normal">Preferred Selections</div>
                {/* <div className="text-[18px] text-black opacity-80">Blueshark R1 model you would like to book:</div> */}
                <div className="flex sm:flex-col md:flex-row sm:gap-y-12 gap-x-8">
                  <div className="flex flex-col sm:items-start md:items-center">
                    <button
                      value="CBU"
                      onClick={preferredBikes}
                      className={`text-button font-semibold cta border-primary border-[1.5px] checked:bg-none focus:ring-0 hover:bg-primary hover:text-white transition ease-in duration-200 ${
                        model === 'CBU' ? 'bg-primary text-white' : 'text-primary'
                      }`}
                    >
                      Blueshark R1
                    </button>
                  </div>
                  <div className="flex flex-col sm:items-start md:items-center">
                    <button
                      value="Lite"
                      onClick={preferredBikes}
                      className={`text-button font-semibold cta border-primary border-[1.5px] checked:bg-none focus:ring-0 hover:bg-primary hover:text-white transition ease-in duration-200 ${
                        model === 'Lite' ? 'bg-primary text-white' : 'text-primary'
                      }`}
                    >
                      Blueshark R1 Lite
                    </button>
                  </div>
                </div>
                {/* <div className="text-[18px] text-black opacity-80">Preferred colour:</div> */}
                <div className="flex text-color-desc text-[#666666] font-bold gap-x-4 items-center pt-8 pb-8">
                  <span className="text-primary">Color:</span>
                  {colour === 'blue' && <div>Blueshark Blue</div>}
                  {colour === 'pink' && <div>Seashell Pink</div>}
                  {colour === 'brown' && <div>Coconut Brown</div>}
                  {colour === 'beige' && <div>Coastal Beige</div>}
                  {colour === 'green' && <div>Pine Green</div>}
                  {colour === 'black' && <div>Darksea Black</div>}
                  {colour === 'white' && <div>Spindrift White</div>}
                </div>
                <div className="flex gap-x-8 sm:gap-y-8 sm:flex-wrap md:flex-nowrap pb-16">
                  <button
                    value="blue"
                    onClick={preferredColour}
                    className="h-[40px] w-[40px] checked:bg-none bg-[#0084A3] text-[#0084A3] focus:ring-2 focus:ring-[#0084A3] border-[#0084A3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></button>
                  <button
                    value="black"
                    onClick={preferredColour}
                    className="h-[40px] w-[40px] checked:bg-none bg-[#3D3D3D] text-[#3D3D3D] focus:ring-2 focus:ring-[#3D3D3D] border-[#3D3D3D] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></button>
                  <button
                    value="white"
                    onClick={preferredColour}
                    className="h-[40px] w-[40px] checked:bg-none bg-white text-white focus:ring-2 focus:ring-primary border-white focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></button>
                  <button
                    value="pink"
                    onClick={preferredColour}
                    className="h-[40px] w-[40px] checked:bg-none bg-[#E8AFC3] text-[#E8AFC3] focus:ring-2 focus:ring-[#E8AFC3] border-[#E8AFC3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></button>
                  <button
                    value="brown"
                    onClick={preferredColour}
                    className="h-[40px] w-[40px] checked:bg-none bg-[#604C31] text-[#604C31] focus:ring-2 focus:ring-[#604C31] border-[#604C31] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></button>
                  <button
                    value="beige"
                    onClick={preferredColour}
                    className="h-[40px] w-[40px] checked:bg-none bg-[#EAE1C3] text-[#EAE1C3] focus:ring-2 focus:ring-[#EAE1C3] border-[#EAE1C3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></button>
                  <button
                    value="green"
                    onClick={preferredColour}
                    className="h-[40px] w-[40px] checked:bg-none bg-[#004826] text-[#004826] focus:ring-2 focus:ring-[#004826] border-[#004826] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></button>
                </div>
              </div>
              <div>
                <div className="text-h3 text-primary font-bold pb-4">Other Information</div>
                <div className="text-body3 text-black opacity-80 pb-4">Do you own a bike?</div>
                <div className="flex md:flex-row sm:gap-y-12 gap-x-8 pb-12">
                  <div className="flex flex-col items-center">
                    <button
                      value="Yes"
                      onClick={ownBiked}
                      className={`text-button font-semibold w-full cta border-primary border-2 checked:bg-none focus:ring-0 hover:bg-primary hover:text-white transition ease-in duration-200 ${
                        own === 'Yes' ? 'bg-primary text-white' : 'text-primary'
                      }`}
                    >
                      Yes
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <button
                      value="No"
                      onClick={ownBiked}
                      className={`text-button font-semibold w-full cta border-primary border-2 checked:bg-none focus:ring-0 hover:bg-primary hover:text-white transition ease-in duration-200 ${
                        own === 'No' ? 'bg-primary text-white' : 'text-primary'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div className="text-body3 text-black opacity-80 pb-4">
                  What bike model do you currently own (if applicable)?
                </div>
                <div>
                  <input
                    value={bikeOwned}
                    onChange={(e) => setBikeOwned(e.target.value)}
                    className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-body3"
                    id="email"
                    type="textarea"
                    placeholder="Yamaha Aerox 155"
                  />
                </div>
                <input className="hidden" value={currentTimeDate} id="currentTimeDate" />
                <div className="pt-8 md:text-right">
                  <button
                    className="bg-transparent hover:bg-primary text-primary hover:text-white border-primary border-2 w-auto text-button font-semibold cta transition ease-in duration-200"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="fixed bottom-[20%] right-[15%] sm:block md:hidden z-20">
          <a href="#">
            <IoChevronUpCircleSharp className="text-[#0092F3] text-[40px] opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
