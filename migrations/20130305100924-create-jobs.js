module.exports = {
  up: function(migration, DataTypes) {
    // add altering commands here
    migration.createTable('jobs',
      {
        id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        internalId:  { type: DataTypes.STRING, defaultValue: null },
        status:      { type: DataTypes.STRING, defaultValue: "processing" },
        progress:    { type: DataTypes.FLOAT, defaultValue: 0.0 },
        duration:    { type: DataTypes.INTEGER, defaultValue: 0 },
        filesize:    { type: DataTypes.INTEGER, defaultValue: 0 },
        opts:        { type: DataTypes.TEXT, defaultValue: null },
        message:     { type: DataTypes.TEXT, defaultValue: null },
        createdAt:   DataTypes.DATE,
        updatedAt:   DataTypes.DATE
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    )
    migration.addIndex('jobs', ['internalId'])
  },
  down: function(migration) {
    // add reverting commands here
    migration.dropTable('jobs')
  }
}