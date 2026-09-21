export default {
  name: 'vehicle',
  title: 'Véhicules',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du modèle (ex: Mercedes GLE)',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Année (ex: 2024)',
      type: 'string',
    },
    {
      name: 'transmission',
      title: 'Boîte de vitesse',
      type: 'string',
      options: {
        list: [
          { title: 'Automatique', value: 'Automatique' },
          { title: 'Manuelle', value: 'Manuelle' },
        ], 
      },
      initialValue: 'Automatique'
    },
    {
      name: 'km',
      title: 'Kilométrage (ex: 15 000 km ou 0 km)',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Prix (ex: Sur demande ou 45 000 000 FCFA)',
      type: 'string',
      initialValue: 'Sur demande'
    },
    {
      name: 'featured',
      title: 'Mettre en vedette ? (Sera affiché en très grand)',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'image',
      title: 'Image du Véhicule',
      type: 'image',
      options: {
        hotspot: true, // Autorise le client à rogner l'image précisément
      },
    },
  ],
}
