using CsvHelper;
using Hospital_TECNologico.Repositories.Interfaces;
using Hospital_TECNológico_Backend.Dtos;
using Hospital_TECNológico_Backend.Helpers;
using Nest;
using AutoMapper;
using System.Globalization;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_TECNológico_Backend.Repositories
{
    public class PatientRepository : IPatientRepository
    {
        const string path = @"example.csv";
        private readonly IMapper _mapper;
        public PatientRepository(IMapper mapper)
        {
            _mapper = mapper;
        }

        public Result InsertPatients(PatientDto patient)
        {
            var isPatientInFile = GetPatientById(patient.Id);
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
                    if (isPatientInFile != null)
                    {
                        return Result.Error;
                    }
                    csvWriter.NextRecord();
                    csvWriter.WriteRecord(patient);
                }
            }

            return Result.Created;

        }

        public List<PatientDto> GetPatients()
        {
            var entities = new List<PatientDto>();

            using (StreamReader reader = new StreamReader(path))
            {
                CsvReader csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);

                entities = csvReader.GetRecords<PatientDto>().ToList();
            }

            return entities;
        }

        public PatientDto GetPatientById(int patientId)
        {
            var patient = new PatientDto();
            using (StreamReader reader = new StreamReader(path))
            {
                CsvReader csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);

                while (csvReader.Read())
                {
                    patient = csvReader.GetRecord<PatientDto>();

                    if (patient.Id == patientId)
                    {
                        return patient;
                    }
                }
            }

            return null;
        }
    }
}
