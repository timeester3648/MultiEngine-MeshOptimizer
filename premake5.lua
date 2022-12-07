include "../../premake/common_premake_defines.lua"

project "MeshOptimizer"
	kind "StaticLib"
	language "C++"
	cppdialect "C++latest"
	cdialect "C17"
	targetname "%{prj.name}"
	inlining "Auto"

	files {
		"./src/**.h",
		"./src/**.cpp"
	}