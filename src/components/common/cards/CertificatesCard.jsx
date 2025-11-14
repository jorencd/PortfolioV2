import React from "react";

function CertificatesCard({ certificate }) {
  return (
    <div className="border h-55 flex flex-col border-neutral-200 p-6 rounded-lg">
      <div className="w-full mb-4 gap-x-3 flex items-center">
        <img
          src={certificate.image}
          alt={certificate.name}
          className="rounded-full object-cover w-10 h-10"
        />
        <div>
          <h3 className="font-medium text-sm text-neutral-800">{certificate.companyname}</h3>
          <p className="text-xs text-neutral-500">{certificate.category}</p>
        </div>
      </div>
      <p className="font-semibold text-sm mb-1 text-neutral-800">{certificate.certname}</p>
      <p className="text-xs text-neutral-500">{certificate.description}</p>
      <p className="text-xs text-neutral-500 font-mediums mt-auto">{certificate.date}</p>
    </div>
  );
}

export default CertificatesCard;
