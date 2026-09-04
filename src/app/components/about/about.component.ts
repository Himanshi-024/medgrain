// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RevealDirective } from '../../shared/reveal.directive';

// interface Founder {
//   name: string;
//   role: string;
//   title: string;
//   quote: string;
//   experience: string;
//   message: string;
// }

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [CommonModule, RevealDirective],
//   templateUrl: './about.component.html',
//   styleUrl: './about.component.scss',
// })
// export class AboutComponent {
//   founders: Founder[] = [
//     {
//       name: 'Deepak Sahu',
//       role: 'Founder / Executive Director',
//       title: 'A Commitment to Quality, Built on Experience',
//       quote: 'Quality is not just a standard we follow — it is the foundation on which Medgrain is built.',
//       experience: '10+ years in Quality Control, Quality Assurance, testing and Good Manufacturing Practices (GMP).',
//       message: 'With more than 10 years of professional experience in Quality Control, Quality Assurance, testing and Good Manufacturing Practices (GMP), I have always believed that consistent quality comes from strong systems, disciplined processes and attention to detail at every stage. At Medgrain, we are committed to bringing this quality-focused approach to food manufacturing. From raw material selection and processing to testing, hygiene, packing and finished-product quality, our focus is on maintaining consistency and building products that our customers can trust. Our vision is to build Medgrain as a trusted and quality-driven flour brand, while creating long-term relationships with our customers, retailers, distributors and business partners.',
//     },
//     {
//       name: 'Ankit Mishra',
//       role: 'Co-Founder & Head – Plant Operations',
//       title: 'Production Excellence Built on Experience',
//       quote: 'Great products are created through disciplined processes, consistent manufacturing and a commitment to excellence.',
//       experience: '10+ years in Production, manufacturing operations and Good Manufacturing Practices (GMP).',
//       message: 'With more than 10 years of professional experience in Production, manufacturing operations and Good Manufacturing Practices (GMP), I have always believed that strong production systems are the foundation of consistent and reliable products. At Medgrain, we are committed to applying this experience to every stage of our manufacturing process. Our focus is on process discipline, operational efficiency, hygiene, consistency and responsible manufacturing practices. Our vision is to build Medgrain into a trusted and quality-focused flour brand, supported by efficient manufacturing and strong systems that deliver consistent products to our customers and business partners.',
//     },
//     {
//       name: 'Devendra Singh Shaktawat',
//       role: 'Co-Founder & Head – Legal, Purchase & Documentation',
//       title: 'From Agricultural Expertise to Responsible Manufacturing',
//       quote: 'Good quality begins with understanding the raw material and maintaining the right practices throughout the journey.',
//       experience: '10+ years in Horticulture, agricultural practices and Good Manufacturing Practices (GMP).',
//       message: 'With more than 10 years of professional experience in Horticulture, agricultural practices and Good Manufacturing Practices (GMP), I have developed a strong understanding of raw materials, their quality, handling and the importance of disciplined processes. At Medgrain, we believe that producing a dependable flour product starts with the right approach to raw material selection, handling, hygiene and controlled processing. My experience in horticulture and GMP contributes to our commitment to maintaining systematic and responsible practices across our operations. Together, our vision is to build Medgrain as a trusted, quality-driven and responsible flour brand, creating long-term value for consumers, retailers, distributors and business partners.',
//     },
//   ];
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface Founder {
  name: string;
  role: string;
  title: string;
  heading: string;
  quote: string;
  experience: string;
  message: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  founders: Founder[] = [
    {
      name: 'Deepak Sahu',
      heading: 'Founder’s Message',
      role: 'Founder / Executive Director',
      title: 'A Commitment to Quality, Built on Experience',
      quote: 'Quality is not just a standard we follow — it is the foundation on which Medgrain is built.',
      experience: '10+ years in Quality Control, Quality Assurance, testing and Good Manufacturing Practices (GMP).',
      message: 'With more than 10 years of professional experience in Quality Control, Quality Assurance, testing and Good Manufacturing Practices (GMP), I have always believed that consistent quality comes from strong systems, disciplined processes and attention to detail at every stage. At Medgrain, we are committed to bringing this quality-focused approach to food manufacturing. From raw material selection and processing to testing, hygiene, packing and finished-product quality, our focus is on maintaining consistency and building products that our customers can trust. Our vision is to build Medgrain as a trusted and quality-driven flour brand, while creating long-term relationships with our customers, retailers, distributors and business partners.',
    },
    {
      name: 'Ankit Mishra',
      heading: 'A Word from Our Co-Founder',
      role: 'Co-Founder & Head – Plant Operations',
      title: 'Production Excellence Built on Experience',
      quote: 'Great products are created through disciplined processes, consistent manufacturing and a commitment to excellence.',
      experience: '10+ years in Production, manufacturing operations and Good Manufacturing Practices (GMP).',
      message: 'With more than 10 years of professional experience in Production, manufacturing operations and Good Manufacturing Practices (GMP), I have always believed that strong production systems are the foundation of consistent and reliable products. At Medgrain, we are committed to applying this experience to every stage of our manufacturing process. Our focus is on process discipline, operational efficiency, hygiene, consistency and responsible manufacturing practices. Our vision is to build Medgrain into a trusted and quality-focused flour brand, supported by efficient manufacturing and strong systems that deliver consistent products to our customers and business partners.',
    },
    {
      name: 'Devendra Singh Shaktawat',
      heading: 'A Word from Our Co-Founder',
      role: 'Co-Founder & Head – Legal, Purchase & Documentation',
      title: 'From Agricultural Expertise to Responsible Manufacturing',
      quote: 'Good quality begins with understanding the raw material and maintaining the right practices throughout the journey.',
      experience: '10+ years in Horticulture, agricultural practices and Good Manufacturing Practices (GMP).',
      message: 'With more than 10 years of professional experience in Horticulture, agricultural practices and Good Manufacturing Practices (GMP), I have developed a strong understanding of raw materials, their quality, handling and the importance of disciplined processes. At Medgrain, we believe that producing a dependable flour product starts with the right approach to raw material selection, handling, hygiene and controlled processing. My experience in horticulture and GMP contributes to our commitment to maintaining systematic and responsible practices across our operations. Together, our vision is to build Medgrain as a trusted, quality-driven and responsible flour brand, creating long-term value for consumers, retailers, distributors and business partners.',
    },
  ];
}
