using CsvHelper;
using Hospital_TECNológico_Backend.Dtos;
using Nest;
using System.Globalization;
using System.IO;

namespace Hospital_TECNológico_Backend.Helpers
{
    public static class CsvHelperClass
    {
        public static Result WriteEntities(object entity, string path)
        {
            var appendMode = File.Exists(path);
            using (StreamWriter writer = new StreamWriter(path, appendMode))
            using (CsvWriter csvWriter = new CsvWriter(writer, CultureInfo.InvariantCulture))
            {
                if (!appendMode)
                {
                    csvWriter.WriteHeader<object>();
                    csvWriter.NextRecord();
                    csvWriter.WriteRecord(entity);
                }
                else
                {
                    csvWriter.NextRecord();
                    csvWriter.WriteRecord(entity);
                }
            }
 
            return Result.Created;
        }

        public static List<object> GetAllEntities(string path)
        {
            var entities = new List<object>();

            using (StreamReader reader = new StreamReader(path))
            {
                CsvReader csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);

                entities = csvReader.GetRecords<object>().ToList();
            }

            return entities;
        }

        public static object GetEntityById(int entityId, string path)
        {
            var entity = new object();
            using (StreamReader reader = new StreamReader(path))
            {
                CsvReader csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);

                while (csvReader.Read())
                {
                    int id = csvReader.GetField<int>("Id");

                    if (id == entityId)
                    {
                        entity = csvReader.GetRecord<PatientDto>();
                        return entity;
                    }
                }
            }

            return entity;
        }
    }
    
}
