import React from "react";
import { Icon } from "@iconify/react"; 

function CertificatesCard({ certificate }) {
  return (
    
    <a 
    href={certificate.credentialsLink}
    target="_blank"
    rel="noopener noreferrer"
    className="border h-55 flex flex-col 
    border-neutral-200 
    p-6 rounded-lg cursor-pointer 
    hover:shadow-lg transition-shadow duration-300">
      <div className="w-full mb-4 gap-x-3 flex items-center">
        <img
          src={certificate.image}
          alt={certificate.name}
          className="rounded-full object-cover w-10 h-10"
        />
        <div>
          <h3 className="font-medium text-sm text-neutral-800 hover:underline">{certificate.companyname}</h3>
          <p className="text-xs text-neutral-500">{certificate.category}</p>
        </div>
      </div>
      <a 
      href={certificate.credentialsLink}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-sm mb-1 
      text-neutral-800 hover:underline">{certificate.certname}</a>
      <p className="text-xs text-neutral-500">{certificate.description}</p>
      <div className="mt-auto flex justify-between items-center">
        <p className="text-xs text-neutral-500 font-mediums inline">Issued at {certificate.date}</p>
        <a 
          href={certificate.credentialsLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex gap-2 hover:text-neutral-800 border border-[#4e4e4ed0] rounded-full px-3 py-1 text-xs font-medium text-neutral-600"
        >Show Credentials <Icon icon="mynaui:external-link" width="17" height="17"/></a>
      </div>
    </a>
  );
}

export default CertificatesCard;
