import "./dashboard.css";
import { getPoems } from "../../services/poetry";
import { useAppDispatch, useAppSelector } from "../../hooks/usepoems";

interface DashboardProps {
  poems: {
    id: string;
    title: string;
    excerpt: string;
  }[];
  onViewPoem: (id: string) => void;
}
//Pinta en consola
const api = getPoems();
console.log(api)

//Si se activa se daña todo
// const poems = useAppSelector((state) => state.poem.poems); 
// console.log(poems);

const Dashboard: React.FC<DashboardProps> = ({ poems, onViewPoem }) => {

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button className="poem-button" onClick={() => onViewPoem(poem.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
