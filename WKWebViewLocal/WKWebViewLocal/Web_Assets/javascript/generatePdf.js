function getPdf() {
    //var picture = AndroidInterface.getPicture()


  var dd = {
    pageSize: 'A4',
    content: [
            /*{
                image: picture,
                width: 150,
                height: 150
            },*/
                 {
                   table: {
                     // headers are automatically repeated if the table spans over multiple pages
                     // you can declare how many rows should be treated as headers
                     headerRows: 1,
                     widths: [ '10%', '7.5%', '20%', '10%', '3.5%', 'auto' ],

                     body:
                     [
                       [ {text: 'Élement', style:'header'}, {text: 'État', style:'header'}, {text: 'Fonctionnement', style:'header'}, {text: 'Propreté', style:'header'}, {text: 'Nb', style:'header'}, {text: 'Commentaires / Dégradations constatées', style:'header'}],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],
                       [ {text: 'Plafond', style:'item'}, {text: 'BE', style:'badge'}, {text: 'F', style:'item'}, {text: '', style:'item'}, {text: '1', style:'item'}, {text: 'Le plafond est en bon état. Cependant, une tâche est visible dans l\'angle gauche', style:'item'} ],

                     ]
                   }
                 }
               ],

               styles: {
                   header: {
                     fillColor: '#041327',
                     color: 'white'
                   },
                   item: {
                     alignment: 'left'
                   },
                   badge: {
                     alignement: 'center',
                     background: 'green'
                   }
                 }
  }
    const pdfDoc = pdfMake.createPdf(dd);

    pdfDoc.getBase64((data) => {
        console.log('data:application/pdf;base64,' + data)
    });
}

