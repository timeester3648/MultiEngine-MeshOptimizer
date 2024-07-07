void main(MultiBuild::Workspace& workspace) {	
	auto project = workspace.create_project(".");
	auto properties = project.properties();

	properties.name("MeshOptimizer");
	properties.binary_object_kind(MultiBuild::BinaryObjectKind::eStaticLib);
	properties.license("./LICENSE.md");

	project.include_own_required_includes(true);
	project.add_required_project_include({
		"./src"
	});

	properties.files({
		"./src/**.h",
		"./src/**.cpp"
	});
}