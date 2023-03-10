using CsvHelper.Configuration.Attributes;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Hospital_TECNológico_Backend.Dtos
{
    public class PatientDto
    {
        [Name("Name")]
        public string Name { get; set; }
        [Name("Id")]
        public int Id { get; set; }
        [Name("PhoneNumbers")]
        public string PhoneNumbersString
        {
            get
            {
                return string.Join("|", PhoneNumbers);
            }
            set
            {
                PhoneNumbers = new List<string>(value.Split(','));
            }
        }
        public List<string> PhoneNumbers { get; set; }
        [Name("DateOfBirth")]
        public DateTime DateOfBirth { get; set; }
        [Name("Pathologies")]
        public string PathologiesString
        {
            get
            {
                List<string> pathologyStrings = new List<string>();
                foreach (PathologyDto pathology in Pathologies)
                {
                    pathologyStrings.Add($"{pathology.Name}:{pathology.Treatment}");
                }
                return string.Join("|", pathologyStrings);
            }
            set
            {
                Pathologies = new List<PathologyDto>();
                List<string> pathologyStrings = new List<string>(value.Split('|'));
                foreach (string pathologyString in pathologyStrings)
                {
                    string[] pathologyParts = pathologyString.Split(':');
                    Pathologies.Add(new PathologyDto { Name = pathologyParts[0], Treatment = pathologyParts[1] });
                }
            }
        }
        public List<PathologyDto> Pathologies { get; set; }
    }
}
