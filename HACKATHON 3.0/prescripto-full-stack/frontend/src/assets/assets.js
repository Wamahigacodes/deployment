import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard Kamau',
        image: doc1,
        speciality: 'General physician',
        degree: 'UON',
        experience: '4 Years',
        about: 'Dr. Richard has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: 'Kilimani, Nairobi',
            line2: 'Thika'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Naipei',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'JKUAT',
        experience: '3 Years',
        about: 'Dr. Naipei provides supportive and confidential care for womens health needs. She focuses on both prevention and treatment.',
        fees: 60,
        address: {
            line1: 'Karen',
            line2: 'Muthaiga'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Lalaseri',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'KU',
        experience: '1 Years',
        about: 'Dr. Lalaseri helps patients manage skin conditions with customized care. She believes in promoting confidence through healthy skin.',
        fees: 30,
        address: {
            line1: 'Narok, Kenya',
            line2: 'Nairobi'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Ojwang',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'KCA',
        experience: '2 Years',
        about: 'Dr. Ojwang supports the healthy growth of children through expert care. He is known for his child-friendly and reassuring style.',
        fees: 40,
        address: {
            line1: 'Kisumu, Kenya',
            line2: 'Karen, Nairobi'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Naimasiah',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'UON',
        experience: '4 Years',
        about: 'Dr. Naimasiah is dedicated to diagnosing and managing nervous system conditions. Her patients value her clarity and kindness.',
        fees: 50,
        address: {
            line1: 'Membley,Kahawa',
            line2: 'Ngong, Nairobi Kenya'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Karanja',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'Havard',
        experience: '10 Years',
        about: 'Dr. Karanja cares for patients with stroke, seizures, and nerve pain. He provides expert neurological assessments and guidance.',
        fees: 100,
        address: {
            line1: 'Nanyuki, Kenya',
            line2: 'Lavington, Nairobi'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Joe Dennis',
        image: doc7,
        speciality: 'Gastroenterologist',
        degree: 'Havard',
        experience: '10 Years',
        about: 'Dr. Dennis specializes in digestive health and treats issues like ulcers and reflux. He helps patients feel better and eat well.',
        fees: 100,
        address: {
            line1: 'Thendegwa, Kiambu Road',
            line2: 'Nakuru'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy Mwangi',
        image: doc8,
        speciality: 'General Physician',
        degree: 'JKUAT',
        experience: '3 Years',
        about: 'Dr. Mwangi offers quality primary care and treats common illnesses with a caring touch. Patients trust his calm and thorough approach.',
        fees: 60,
        address: {
            line1: 'Juja, Kiambu',
            line2: 'Kikuyu, Kiambu'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Pediatricians',
        degree: 'Strathmore',
        experience: '1 Years',
        about: 'Dr. Mitchell loves working with children and supporting families. She provides expert care from infancy to adolescence.',
        fees: 30,
        address: {
            line1: 'Bypass',
            line2: 'Thika'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Edwin Nganga',
        image: doc10,
        speciality: 'Neurologist',
        degree: 'Havard',
        experience: '10 Years',
        about: 'Dr. Nganga helps patients manage conditions like epilepsy and migraines. He combines modern treatments with compassionate care.',
        fees: 100,
        address: {
            line1: 'Thendegwa, Kiambu road',
            line2: 'Lavington, Nairobi'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Martin Publica',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'UON',
        experience: '8 Years',
        about: 'Dr. Publica focuses on diagnosing and treating brain and nerve disorders. His calm, clear communication makes patients feel at ease.',
        fees: 90,
        address: {
            line1: 'Rwanda 00-014',
            line2: 'Kilimani, Nairobi'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Cate Irene',
        image: doc12,
        speciality: 'Dematologist',
        degree: 'Strathmore',
        experience: '8 Years',
        about: 'Dr. Irene is dedicated to improving skin health and boosting patient confidence. She treats acne, rashes, eczema, and more.',
        fees: 100,
        address: {
            line1: 'Nakuru, Kenya',
            line2: 'Lavington, Kenya'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Aisha Hassan',
        image: doc13,
        speciality: 'General physician',
        degree: 'UON',
        experience: '4 Years',
        about: 'Dr. Aisha offers comprehensive medical care for patients of all ages. She is known for her warm, attentive consultations.',
        fees: 50,
        address: {
            line1: 'Juja South Estate',
            line2: 'Kikuyu, Kenya'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Gachagua',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Gachagua specializes in womens health and provides compassionate, expert care. He focuses on both preventative care and treatment.',
        fees: 60,
        address: {
            line1: 'Westlands, Nairobi',
            line2: 'Kahawa Sukari'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Monyenye',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'Kisii University',
        experience: '1 Years',
        about: 'Dr. Monyenye is passionate about healthy skin and treats a wide range of skin conditions. She offers expert care with a gentle and friendly approach.',
        fees: 30,
        address: {
            line1: 'Nairobi, Kenya',
            line2: 'Mombasa'
        }
    },
]