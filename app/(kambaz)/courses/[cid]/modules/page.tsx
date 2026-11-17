"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import * as client from "../../client";
export default function Modules() {
  const { cid } = useParams();
  const courseId = cid as string;
  const [modules, setModules] = useState<any[]>([]);
  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    const serverModules = await client.findModulesForCourse(courseId);
    setModules(serverModules);
  };
  const createModule = async () => {
    const newModule = await client.createModuleForCourse(courseId, {
      name: moduleName,
      description: "",
      lessons: [],
    });
    setModules([...modules, newModule]);
    setModuleName("");
  };
  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const saveModule = async (module: any) => {
    await client.updateModule(module);
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };
  useEffect(() => {
    fetchModules();
  }, [courseId]);

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModule}
      />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            title={
              module.editing ? (
                <input
                  className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
                  defaultValue={module.name}
                  onChange={(e) =>
                    setModules(modules.map((m) => (m._id === module._id ? { ...m, name: e.target.value } : m)))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({ ...module, editing: false });
                    }
                  }}
                />
              ) : (
                module.name
              )
            }
            controls={
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={removeModule}
                editModule={editModule}
              />
            }
          >
            {module.lessons?.map((lesson: any) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}