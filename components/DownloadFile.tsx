import React from 'react';
import Image from 'next/image'

const DownloadFile = ({downloadPageLink}: {downloadPageLink: string}) => {
    return (
        <div className="p-1">
            <h1 className="my-2 text-lg font-medium">Voici le lien pour télécharger le fichier:</h1>
            <div className="flex space-x-3">
                <span className="break-all">{downloadPageLink}</span>
                <Image
                    src="/images/copy.png"
                    alt="" className="object-contain w-8 h-8 cursor-pointer"
                    onClick={()=> navigator.clipboard.writeText(downloadPageLink)}
                />
            </div>
        </div>
    );
};

export default DownloadFile;