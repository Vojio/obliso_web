import { FileCode, Github, SplitSquareHorizontal } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SplitSquareHorizontal className="w-4 h-4 stroke-white" />
              <span className="text-sm font-medium">Obliso</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Advanced cryptographic sharing for Bitcoin seed phrases.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/create"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  Create Shares
                </Link>
              </li>
              <li>
                <Link
                  href="/recover"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  Recover Secret
                </Link>
              </li>
              <li>
                <Link
                  href="/verify"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  Verify Shares
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/github"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs text-white/60 hover:text-white/90 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-white/40">
            © 2025 Obliso. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/github"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="/docs"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              <FileCode className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;