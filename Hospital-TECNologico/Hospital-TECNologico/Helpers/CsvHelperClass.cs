using CsvHelper;
using Hospital_TECNológico_Backend.Dtos;
using System.Globalization;
using System.IO;

namespace Hospital_TECNológico_Backend.Helpers
{
    public static class CsvHelperClass
    {
        const string path = @"example.csv";
        public static Task InsertPatients(PatientDto patient)
        {
            var appendMode = File.Exists(path);
            using (StreamWriter writer = new StreamWriter(path, appendMode))
            using (CsvWriter csvWriter = new CsvWriter(writer, CultureInfo.InvariantCulture))
            {
                if (!appendMode)
                {
                    csvWriter.WriteHeader<PatientDto>();
                    csvWriter.NextRecord();
                    csvWriter.WriteRecord(patient);
                }
                else
                {
                    csvWriter.NextRecord();
                    csvWriter.WriteRecord(patient);
                }
            }




            return Task.CompletedTask;
        }

        public static List<PatientDto> GetAllPatients()
        {
            var patients = new List<PatientDto>();

            using (StreamReader reader = new StreamReader(path))
            {
                // Create a new CsvReader object and configure it
                CsvReader csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);

                // Read the records from the CSV file and convert them to a list of Person objects
                patients = csvReader.GetRecords<PatientDto>().ToList();
            }

            return patients;
        }

        public static PatientDto GetPatientById(int patientId)
        {
            var patient = new PatientDto();
            using (StreamReader reader = new StreamReader(path))
            {
                // Create a new CsvReader object and configure it
                CsvReader csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);

                while (csvReader.Read())
                {
                    int id = csvReader.GetField<int>("Id");

                    if (id == patientId)
                    {
                        patient = csvReader.GetRecord<PatientDto>();
                        return patient;
                    }
                }
            }

            return patient;
        }
    }
    
}
