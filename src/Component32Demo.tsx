import Component32 from './components/Component32';

/**
 * Demo page for Component32
 * Shows the learning path component at correct Figma dimensions (660x632px)
 */
export default function Component32Demo() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Component 32 - Learning Path</h1>
        <p className="text-gray-600 mb-6 text-center">Figma node: 383:625 | Size: 660×632px</p>
        
        {/* Component at exact Figma size */}
        <div className="relative" style={{ width: '660px', height: '632px' }}>
          <Component32 className="relative size-full" />
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="font-bold text-lg mb-2">Component Features:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Sticky Topic Title: "Chủ đề 1 - Làm quen & Giới thiệu bản thân"</li>
            <li>5 Lessons connected with dashed flow lines</li>
            <li>Lesson 1 (Completed): "Chào hỏi cơ bản"</li>
            <li>Lesson 2 (Completed): "Xưng hô và giới thiệu"</li>
            <li>Lesson 3 (Active): "Giới thiệu tên và sở thích" + Continue button</li>
            <li>Lesson 4 (Locked): "Động lực và câu khích lệ"</li>
            <li>Lesson 5 (Review): "Ôn tập"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
