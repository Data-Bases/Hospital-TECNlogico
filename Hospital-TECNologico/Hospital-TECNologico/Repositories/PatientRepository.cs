using CsvHelper;
using Hospital_TECNológico_Backend.Dtos;
using System;
using System.Formats.Asn1;
using System.Globalization;

namespace Hospital_TECNológico_Backend.Repositories
{
    public class PatientRepository
    {
        const string path = @"example.csv";
        public PatientRepository() { }

        public Task InsertPatients(PatientDto patient)
        {
            using (StreamWriter writer = new StreamWriter(path))
            {
                // Create a new CsvWriter object and configure it
                CsvWriter csvWriter = new CsvWriter(writer, CultureInfo.InvariantCulture);

                // Write the records to the CSV file
                csvWriter.WriteRecord(patient);
            }

            return Task.CompletedTask;
        }

        public List<PatientDto> GetPatients()
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

        public PatientDto GetPatientById(int patientId)
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
