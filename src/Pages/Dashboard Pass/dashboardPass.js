import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import Switch from "react-switch";
import './slideInsection.css'
import styles from './dashApp.module.css';
import headerStyles from './Header.module.css';
import mapStyles from './Map.module.css';
import buttonStyles from './Buttons.module.css';
import toggleStyles from './Toggle.module.css';
import modalStyles from './Modal.module.css';
import Dropdown from './Dropdown';
import profile from '../../Assets/pfp.png'
import logo from '../../Assets/newlogo.svg'
import Modal from 'react-modal'
import Select from 'react-select';
import Typewriter from "typewriter-effect";
// import { useInView } from 'react-intersection-observer';

const Marker = ({ text }) => (
  <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
    📍 {text}
  </div>
);


const lightTheme = {
  "--background": "var(--background-light)",
  "--text-color": "var(--text-color-light)",
};

const darkTheme = {
  "--background": "var(--background-dark)",
  "--text-color": "var(--text-color-dark)",
};

const defaultCenter = {
  lat: 6.5244,  // Latitude for Lagos, Nigeria
  lng: 3.3792,  // Longitude for Lagos, Nigeria
};

const defaultZoom = 11;

function Dashboard() {

  const nigerianStates = [
    { value: 'abia', label: 'Abia' },
    { value: 'adamawa', label: 'Adamawa' },
    { value: 'akwa_ibom', label: 'Akwa Ibom' },
    { value: 'anambra', label: 'Anambra' },
    { value: 'bauchi', label: 'Bauchi' },
    { value: 'bayelsa', label: 'Bayelsa' },
    { value: 'benue', label: 'Benue' },
    { value: 'borno', label: 'Borno' },
    { value: 'cross_river', label: 'Cross River' },
    { value: 'delta', label: 'Delta' },
    { value: 'ebonyi', label: 'Ebonyi' },
    { value: 'edo', label: 'Edo' },
    { value: 'ekiti', label: 'Ekiti' },
    { value: 'enugu', label: 'Enugu' },
    { value: 'gombe', label: 'Gombe' },
    { value: 'imo', label: 'Imo' },
    { value: 'jigawa', label: 'Jigawa' },
    { value: 'kaduna', label: 'Kaduna' },
    { value: 'kano', label: 'Kano' },
    { value: 'katsina', label: 'Katsina' },
    { value: 'kebbi', label: 'Kebbi' },
    { value: 'kogi', label: 'Kogi' },
    { value: 'kwara', label: 'Kwara' },
    { value: 'lagos', label: 'Lagos' },
    { value: 'nasarawa', label: 'Nasarawa' },
    { value: 'niger', label: 'Niger' },
    { value: 'ogun', label: 'Ogun' },
    { value: 'ondo', label: 'Ondo' },
    { value: 'osun', label: 'Osun' },
    { value: 'oyo', label: 'Oyo' },
    { value: 'plateau', label: 'Plateau' },
    { value: 'rivers', label: 'Rivers' },
    { value: 'sokoto', label: 'Sokoto' },
    { value: 'taraba', label: 'Taraba' },
    { value: 'yobe', label: 'Yobe' },
    { value: 'zamfara', label: 'Zamfara' },
    { value: 'fct', label: 'Federal Capital Territory (FCT)' }
  ];



  const localGovernments = {
    abia: ['Aba Asa Road Highway', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala Ngwa North', 'Isiala Ngwa South', 'Isuikwuato', 'Obi Ngwa', 'Ohafia', 'Osisioma', 'Ugwunagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'Umuahia South', 'Umu Nneochi'],
    adamawa: ['Demsa', 'Fufore', 'Ganye', 'Girei', 'Gombi', 'Guyuk', 'Hong', 'Jada', 'Lamurde', 'Madagali', 'Maiha', 'Mayo-Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North', 'Yola South'],
    akwa_ibom: ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono-Ibom', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat-Enin', 'Nsit-Atai', 'Nsit-Ibom', 'Nsit-Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udung-Uko', 'Ukanafun', 'Uruan', 'Urue-Offong/Oruko', 'Uyo'],
    anambra: ['Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'],
    bauchi: ['Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Gamawa', 'Ganjuwa', 'Giade', 'Itas/Gadau', 'Jama\'are', 'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira', 'Tafawa Balewa', 'Toro', 'Warji', 'Zaki'],
    bayelsa: ['Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Ijaw', 'Yenagoa'],
    benue: ['Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande', 'Logo', 'Makurdi', 'Obi', 'Ogbadibo', 'Ohimini', 'Oju', 'Okpokwu', 'Otukpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'],
    borno: ['Abadam', 'Askira/Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul', 'Jere', 'Kaga', 'Kala/Balge', 'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani'],
    cross_river: ['Abi', 'Akamkpa', 'Akpabuyo', 'Bakassi', 'Bekwarra', 'Biase', 'Boki', 'Calabar Municipal', 'Calabar South', 'Etung', 'Ikom', 'Obanliku', 'Obubra', 'Obudu', 'Odukpani', 'Ogoja', 'Yakurr', 'Yala'],
    delta: ['Aniocha North', 'Aniocha South', 'Bomadi', 'Burutu', 'Ethiope East', 'Ethiope West', 'Ika North East', 'Ika South', 'Isoko North', 'Isoko South', 'Ndokwa East', 'Ndokwa West', 'Okpe', 'Oshimili North', 'Oshimili South', 'Patani', 'Sapele', 'Udu', 'Ughelli North', 'Ughelli South', 'Ukwuani', 'Uvwie', 'Warri North', 'Warri South', 'Warri South West'],
    ebonyi: ['Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo', 'Izzi', 'Ohaozara', 'Ohaukwu', 'Onicha'],
    edo: ['Akoko-Edo', 'Egor', 'Esan Central', 'Esan North-East', 'Esan South-East', 'Esan West', 'Etsako Central', 'Etsako East', 'Etsako West', 'Igueben', 'Ikpoba-Okha', 'Oredo', 'Orhionmwon', 'Ovia North-East', 'Ovia South-West', 'Owan East', 'Owan West', 'Uhunmwonde'],
    ekiti: ['Ado-Ekiti', 'Efon', 'Ekiti East', 'Ekiti South-West', 'Ekiti West', 'Emure', 'Gbonyin', 'Ido/Osi', 'Ijero', 'Ikere', 'Ikole', 'Ilejemeje', 'Irepodun/Ifelodun', 'Ise/Orun', 'Moba', 'Oye'],
    enugu: ['Aninri', 'Awgu', 'Enugu East', 'Enugu North', 'Enugu South', 'Ezeagu', 'Igbo Etiti', 'Igbo Eze North', 'Igbo Eze South', 'Isi Uzo', 'Nkanu East', 'Nkanu West', 'Nsukka', 'Oji River', 'Udenu', 'Udi', 'Uzo-Uwani'],
    gombe: ['Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye', 'Gombe', 'Kaltungo', 'Kwami', 'Nafada', 'Shongom', 'Yamaltu/Deba'],
    imo: ['Aboh Mbaise', 'Ahiazu Mbaise', 'Ehime Mbano', 'Ezinihitte', 'Ideato North', 'Ideato South', 'Ihitte/Uboma', 'Ikeduru', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor Okpala', 'Njaba', 'Nkwerre', 'Nwangele', 'Obowo', 'Oguta', 'Ohaji/Egbema', 'Okigwe', 'Onuimo', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri Municipal', 'Owerri North', 'Owerri West'],
    jigawa: ['Auyo', 'Babura', 'Biriniwa', 'Birnin Kudu', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadejia', 'Jahun', 'Kafin Hausa', 'Kaugama', 'Kazaure', 'Kiri Kasama', 'Kiyawa', 'Maigatari', 'Malam Madori', 'Miga', 'Ringim', 'Roni', 'Sule Tankarkar', 'Taura', 'Yankwashi'],
    kaduna: ['Birnin Gwari', 'Chikun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', "Jema'a", 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarako', 'Kajuru', 'Kaura', 'Kauru', 'Kubau', 'Kudan', 'Lere', 'Makarfi', 'Sabon Gari', 'Sanga', 'Soba', 'Zangon Kataf', 'Zaria'],
    kano: ['Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun Mallam', 'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takai', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil'],
    katsina: ['Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi', 'Dutsin Ma', 'Faskari', 'Funtua', 'Ingawa', 'Jibia', 'Kafur', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Kurfi', 'Kusada', 'Mai\'Adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango'],
    kebbi: ['Aleiro', 'Arewa Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Fakai', 'Gwandu', 'Jega', 'Kalgo', 'Koko/Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu/Danko', 'Yauri', 'Zuru'],
    kogi: ['Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela-Odolu', 'Ijumu', 'Kabba/Bunu', 'Kogi', 'Lokoja', 'Mopa-Muro', 'Ofu', 'Ogori/Magongo', 'Okehi', 'Okene', 'Olamaboro', 'Omala', 'Yagba East', 'Yagba West'],
    kwara: ['Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke Ero', 'Oyun', 'Pategi'],
    lagos: ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'],
    nasarawa: ['Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Lafia', 'Nasarawa', 'Nasarawa Eggon', 'Obi', 'Toto', 'Wamba'],
    niger: ['Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora', 'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa', 'Moya', 'Paikoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Tafa', 'Wushishi'],
    ogun: ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko Afon', 'Ipokia', 'Obafemi Owode', 'Odeda', 'Odogbolu', 'Ogun Waterside', 'Remo North', 'Shagamu'],
    ondo: ['Akoko North-East', 'Akoko North-West', 'Akoko South-East', 'Akoko South-West', 'Akure North', 'Akure South', 'Ese Odo', 'Idanre', 'Ifedore', 'Ilaje', 'Ile Oluji/Okeigbo', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo'],
    osun: ['Atakumosa East', 'Atakumosa West', 'Aiyedaade', 'Aiyedire', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South', 'Egbedore', 'Ejigbo', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Ifedayo', 'Ifelodun', 'Ila', 'Ilesa East', 'Ilesa West', 'Irepodun', 'Irewole', 'Isokan', 'Iwo', 'Obokun', 'Odo Otin', 'Ola Oluwa', 'Olorunda', 'Oriade', 'Orolu'],
    oyo: ['Afijio', 'Akinyele', 'Atiba', 'Atisbo', 'Egbeda', 'Ibadan North', 'Ibadan North-East', 'Ibadan North-West', 'Ibadan South-East', 'Ibadan South-West', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu', 'Ogbomosho North', 'Ogbomosho South', 'Ogo Oluwa', 'Olorunsogo', 'Oluyole', 'Ona Ara', 'Orelope', 'Ori Ire', 'Oyo East', 'Oyo West', 'Saki East', 'Saki West', 'Surulere'],
    plateau: ['Barkin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang North', 'Langtang South', 'Mangu', 'Mikang', 'Pankshin', 'Qua\'an Pan', 'Riyom', 'Shendam', 'Wase'],
    rivers: ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku-Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Eleme', 'Emohua', 'Etche', 'Gokana', 'Ikwerre', 'Khana', 'Obio/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okrika', 'Omuma', 'Opobo/Nkoro', 'Oyigbo', 'Port Harcourt', 'Tai'],
    sokoto: ['Binji', 'Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Gwadabawa', 'Illela', 'Isa', 'Kebbe', 'Kware', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tangaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo'],
    taraba: ['Ardo Kola', 'Bali', 'Donga', 'Gashaka', 'Gassol', 'Ibi', 'Jalingo', 'Karim Lamido', 'Kumi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing'],
    yobe: ['Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Nangere', 'Nguru', 'Potiskum', 'Tarmuwa', 'Yunusari', 'Yusufari'],
    zamfara: ['Anka', 'Bakura', 'Birnin Magaji/Kiyaw', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara', 'Tsafe', 'Zurmi'],
    fct: ['Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal Area Council']
  }




  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedLgas(null);


    const lgas = localGovernments[selectedOption?.value] || [];
    setLocalGovernmentOptions(lgas.map(lga => ({ value: lga, label: lga })));

    setOrigin(selectedOption?.value);
  };


  const handlGovChange = (selectedOption) => {
    setSelectedLgas(selectedOption);
    setLocalGov(selectedOption?.value);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isForSelf, setIsForSelf] = useState(true);
  const [localGov, setLocalGov] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLgas, setSelectedLgas] = useState(null);
  const [localGovernmentOptions, setLocalGovernmentOptions] = useState([]);
  const [origin, setOrigin] = useState("");
  const navigate = useNavigate();

  const [formData] = useState({
    date: '',
    time: '',
    destination: '',
    location: ''
  });

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBookingTypeChange = (e) => {
    setIsForSelf(e.target.value === "self");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsModalOpen(false); 
    navigate('/check_rides')
  };


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          toast.error("Error getting location:", error);
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);





  return (
    <div className={styles.appContainer} style={isDarkMode ? darkTheme : lightTheme}>
      <header className={headerStyles.header}>
        <div className={styles.logoGroup}>
          <img src={logo} alt="" />
          <div className={styles.typewriteThings}>
            <Typewriter

              options={{
                strings: [
                  "Burlixque",
                  "Welcome Back John",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>

        </div>
        <div className={styles.toggloedropdown}>
          <div className={toggleStyles.toggleContainer}>
            <label htmlFor="theme">{isDarkMode ? 'Light Theme' : 'Dark Theme'}</label>
            <Switch
              id="theme"
              onChange={handleThemeToggle}
              checked={isDarkMode}
              onColor="#ccc"
              offColor="#ccc"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <Dropdown openModal={handleModalToggle} />
        </div>


      </header>

      {/* Google Map */}
      <div className={mapStyles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyASUh5H7MeQ1j_lYTeAQm-sAFZ7-ukvQSE" }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          center={userLocation || defaultCenter} 
        >
          {userLocation && (
            <Marker lat={userLocation.lat} lng={userLocation.lng} />
          )}
        </GoogleMapReact>
      </div>

      <div className={buttonStyles.buttonContainer}>

        <button style={isDarkMode ? { backgroundColor: '#ffffff', color: '#000000' } : { backgroundColor: '#000000', color: '#ffffff' }} className={buttonStyles.buttondd} onClick={handleModalToggle}>Schedule a Ride</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName={modalStyles.modalOverlay}
        className={modalStyles.modalContent}
      >
        <div className={modalStyles.modalHeader}>Schedule a Ride</div>
        <p className={modalStyles.absolutePP} onClick={handleCloseModal}>X</p>
        <form onSubmit={handleSearchSubmit}>
          <div className={modalStyles.formGroup}>
            <div className={modalStyles.radioGroup}>
              <label className={modalStyles.radioLabel}>
                <input
                  type="radio"
                  value="self"
                  checked={isForSelf}
                  onChange={handleBookingTypeChange}
                />{" "}
                For Self
              </label>
              <label className={modalStyles.radioLabel}>
                <input
                  type="radio"
                  value="someoneElse"
                  checked={!isForSelf}
                  onChange={handleBookingTypeChange}
                />{" "}
                For Someone Else
              </label>
            </div>

            {isForSelf ? (
              <>
                <div>
                  <label className={modalStyles.label} htmlFor="date">Date</label>
                  <input className={modalStyles.input} type="date" id="date" />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="time">Time</label>
                  <input className={modalStyles.input} type="time" id="time" />
                </div>


                <p className="bold flex-flex">Destination</p>
                <div>


                  <label className={modalStyles.label} htmlFor="destination">Select State</label>
                  {/* <input className={modalStyles.input} type="text" id="destination" placeholder="Enter destination" required /> */}
                  <Select
                    id="destination"
                    value={selectedState}
                    onChange={handleStateChange}
                    options={nigerianStates}
                    placeholder="Select a state"
                    isSearchable
                    className={modalStyles.selecters}
                  />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="stop">Select Bus-stop</label>
                  <Select
                    id="stop"
                    value={selectedLgas}
                    onChange={handlGovChange}
                    options={localGovernmentOptions}
                    placeholder="Select a bus-stop"
                    isSearchable
                    className={modalStyles.selecters}
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className={modalStyles.label} htmlFor="location">Location</label>
                  <input className={modalStyles.input} type="text" id="location" placeholder="Enter location" required />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="date">Date</label>
                  <input className={modalStyles.input} type="date" id="date" required />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="time">Time</label>
                  <input className={modalStyles.input} type="time" id="time" required />
                </div>
                <p className="bold flex-flex">Destination</p>
                <div>


                  <label className={modalStyles.label} htmlFor="destination">Select State</label>
                  {/* <input className={modalStyles.input} type="text" id="destination" placeholder="Enter destination" required /> */}
                  <Select
                    id="destination"
                    value={selectedState}
                    onChange={handleStateChange}
                    options={nigerianStates}
                    placeholder="Select a state"
                    isSearchable
                    className={modalStyles.selecters}
                  />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="stop">Select Bus-stop</label>
                  <Select
                    id="stop"
                    value={selectedLgas}
                    onChange={handlGovChange}
                    options={localGovernmentOptions}
                    placeholder="Select a bus-stop"
                    isSearchable
                    className={modalStyles.selecters}
                  />
                </div>
              </>
            )}
          </div>

          <div className={modalStyles.modalFooter}>
            <button type="submit" className={modalStyles.submitButton}>Search</button>
          </div>
        </form>
      </Modal>


      <div style={{ height: '80px' }} id="about-us" />

      <h4 className={styles.aboutmeh4} >About Us</h4>
      <div className={styles.aboutGroupthings}>
        <img src={profile} alt="" />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
      </div>



      <div style={{ height: '50px' }} id="contact-us" />
      <h4 className={styles.aboutmeh4}>Contact Us</h4>
      <div className={styles.tivcontainer}>
        <div className={styles.formSectionings}>
          <h3 className={styles.bigh3}>Get in Touch</h3>
          <h1>Let's Chat, Reach Out to Us</h1>
          <p>
            Have questions or feedback? We're here to help. Send us a message, and we'll respond
            within 24 hours.
          </p>
          <form className={styles.formers}>
            <div className={styles.inputGroupers}>
              <div className={styles.inputFielders}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="First name" />
              </div>
              <div className={styles.inputFielders}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Last name" />
              </div>
            </div>
            <div className={styles.inputFielders}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email address" />
            </div>
            <div className={styles.inputFielders}>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Leave us a message" />
            </div>
            <div className={styles.checkboxers}>
              <input type="checkbox" id="privacyPolicy" />
              <label htmlFor="privacyPolicy">
                I agree to our friendly <a style={{ color: 'blue' }} href="/dashboard">privacy policy</a>
              </label>
            </div>
            <button type="submit" className={styles.submitButtoners}>Send Message</button>
          </form>
        </div>

        <div className={styles.imageSection}>
          <img src="https://media.istockphoto.com/id/1995370992/photo/discover-seamless-customer-support-through-a-businessman-touching-virtual-screen-icons-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=knQlbQamISORsNNZcAU_4VoFhFOd3WZL7_Rtb_h4sVo=" alt="Contact Us" />
          <div className={styles.contactDetails}>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>📧</span>
              <p>Email: <a style={{ color: 'blue' }} href="mailto:techteam@kawruh.com">techteam@kawruh.com</a></p>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>📞</span>
              <p>Phone:<a style={{ color: 'blue' }} href="tel: 08147645851"> 08147645851 </a> </p>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>🗨</span>
              <p>Whatsapp:<a style={{ color: 'blue' }} href="https://wa.me/+2348147645851"> Customer Care </a> </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
}

export default Dashboard;
